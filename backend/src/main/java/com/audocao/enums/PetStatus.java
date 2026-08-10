package com.audocao.enums;

public enum PetStatus {
    AVAILABLE("Disponível para adoção"),
    PENDING("Adoção em andamento"),
    ADOPTED("Adotado");

    private final String description;

    PetStatus(String description) {
        this.description = description;
    }

    public String getDescription() {
        return description;
    }
}