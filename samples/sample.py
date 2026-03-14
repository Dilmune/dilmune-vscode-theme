from dataclasses import dataclass, field
from datetime import datetime, timedelta
from typing import Optional
import asyncio
import logging

logger = logging.getLogger(__name__)

RATE_LIMIT = 100
BATCH_SIZE = 50


@dataclass
class Notification:
    recipient: str
    subject: str
    body: str
    sent_at: Optional[datetime] = None
    retries: int = 0
    tags: list[str] = field(default_factory=list)

    @property
    def is_sent(self) -> bool:
        return self.sent_at is not None


class NotificationService:
    """Handles sending and tracking notifications."""

    def __init__(self, max_retries: int = 3) -> None:
        self._max_retries = max_retries
        self._queue: list[Notification] = []

    def enqueue(self, notification: Notification) -> None:
        if not notification.recipient:
            raise ValueError("Recipient must not be empty")
        self._queue.append(notification)

    async def flush(self) -> dict[str, int]:
        sent, failed = 0, 0
        batches = [
            self._queue[i : i + BATCH_SIZE]
            for i in range(0, len(self._queue), BATCH_SIZE)
        ]

        for batch in batches:
            results = await asyncio.gather(
                *[self._send(n) for n in batch], return_exceptions=True
            )
            for result in results:
                if isinstance(result, Exception):
                    failed += 1
                    logger.error(f"Send failed: {result}")
                else:
                    sent += 1

        self._queue.clear()
        return {"sent": sent, "failed": failed}

    async def _send(self, notification: Notification) -> None:
        try:
            await asyncio.sleep(0.01)
            notification.sent_at = datetime.now()
            logger.info(f"Sent to {notification.recipient}: {notification.subject}")
        except ConnectionError as exc:
            notification.retries += 1
            raise RuntimeError(f"Delivery failed for {notification.recipient}") from exc


def upcoming_notifications(
    notifications: list[Notification], window: timedelta = timedelta(hours=1)
) -> list[str]:
    cutoff = datetime.now() + window
    return [
        n.subject
        for n in notifications
        if not n.is_sent and n.tags and "scheduled" in n.tags
    ]
