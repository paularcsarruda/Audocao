package com.audocao.enums;

public enum PetType {
    DOG("Cão"),
    CAT("Gato"),
    OTHER("Outro");

    private final String description;

    PetType(String description) {
        this.description = description;
    }

    public String getDescription() {
        return description;
    }
}