package com.example.inventory;

import java.time.Instant;
import java.util.*;
import java.util.stream.Collectors;

public class InventoryService {

    public enum Category {
        ELECTRONICS,
        CLOTHING,
        FOOD,
        FURNITURE
    }

    public record Product(
        String id,
        String name,
        Category category,
        double price,
        int quantity,
        Instant createdAt
    ) {}

    private final Map<String, Product> catalog = new HashMap<>();

    public void addProduct(Product product) {
        if (product.price() < 0) {
            throw new IllegalArgumentException("Price must be non-negative");
        }
        catalog.put(product.id(), product);
    }

    public Optional<Product> findById(String id) {
        return Optional.ofNullable(catalog.get(id));
    }

    public List<Product> findByCategory(Category category) {
        return catalog.values().stream()
            .filter(p -> p.category() == category)
            .sorted(Comparator.comparing(Product::name))
            .collect(Collectors.toList());
    }

    public double totalValue() {
        return catalog.values().stream()
            .mapToDouble(p -> p.price() * p.quantity())
            .sum();
    }

    public Map<Category, Long> countByCategory() {
        return catalog.values().stream()
            .collect(Collectors.groupingBy(Product::category, Collectors.counting()));
    }

    @Override
    public String toString() {
        return "InventoryService{products=%d, value=%.2f}".formatted(
            catalog.size(), totalValue()
        );
    }
}
