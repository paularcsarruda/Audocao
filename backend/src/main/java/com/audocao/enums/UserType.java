package com.audocao.enums;

public enum UserType {
    ONG("Organização Não Governamental"),
    PROTECTOR("Protetor Independente"),
    ADOPTER("Adotante");

    private final String description;

    UserType(String description) {
        this.description = description;
    }

    public String getDescription() {
        return description;
    }
}