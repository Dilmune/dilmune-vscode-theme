<?php

declare(strict_types=1);

namespace App\Services;

use App\Models\Invoice;
use App\Exceptions\PaymentException;
use DateTimeImmutable;

readonly class InvoiceService
{
    private const TAX_RATE = 0.10;
    private const CURRENCY = 'USD';

    public function __construct(
        private PaymentGateway $gateway,
        private InvoiceRepository $repository,
    ) {}

    public function createInvoice(
        int $customerId,
        array $lineItems,
        ?string $note = null,
    ): Invoice {
        $subtotal = array_sum(array_map(
            fn(array $item): float => $item['price'] * $item['quantity'],
            $lineItems,
        ));

        $tax = round($subtotal * self::TAX_RATE, 2);

        $invoice = new Invoice(
            customerId: $customerId,
            subtotal: $subtotal,
            tax: $tax,
            total: $subtotal + $tax,
            currency: self::CURRENCY,
            issuedAt: new DateTimeImmutable(),
            note: $note,
        );

        return $this->repository->save($invoice);
    }

    public function charge(Invoice $invoice): bool
    {
        try {
            $result = $this->gateway->charge(
                amount: $invoice->total,
                currency: $invoice->currency,
                metadata: ['invoice_id' => $invoice->id],
            );
            $invoice->markPaid($result->transactionId);
            return true;
        } catch (PaymentException $e) {
            $invoice->markFailed($e->getMessage());
            throw $e;
        }
    }

    /** @return Invoice[] */
    public function getOverdue(int $daysThreshold = 30): array
    {
        $cutoff = new DateTimeImmutable("-{$daysThreshold} days");
        return array_filter(
            $this->repository->findUnpaid(),
            fn(Invoice $inv): bool => $inv->issuedAt < $cutoff,
        );
    }
}
