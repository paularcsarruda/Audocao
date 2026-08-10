package com.audocao.dto.request;

import jakarta.validation.constraints.*;
import lombok.Data;

@Data
public class PetRequest {
    @NotBlank(message = "Nome é obrigatório")
    @Size(min = 2, max = 50, message = "Nome deve ter entre 2 e 50 caracteres")
    private String name;

    @NotBlank(message = "Espécie é obrigatória")
    private String species;

    private String breed;

    @Min(value = 0, message = "Idade deve ser maior ou igual a 0")
    @Max(value = 360, message = "Idade deve ser menor que 360 meses")
    private Integer age;

    private String size;
    private String color;

    @Size(max = 1000, message = "Descrição deve ter no máximo 1000 caracteres")
    private String description;

    private String photoUrl;
    private String location;

    private boolean vaccinated;
    private boolean neutered;
    private boolean dewormed;
}