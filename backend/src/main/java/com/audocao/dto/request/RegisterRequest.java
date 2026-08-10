package com.audocao.dto.request;

import com.audocao.enums.UserType;
import jakarta.validation.constraints.*;
import lombok.Data;

@Data
public class RegisterRequest {
    @NotBlank(message = "Email é obrigatório")
    @Email(message = "Email deve ser válido")
    private String email;

    @NotBlank(message = "Nome é obrigatório")
    @Size(min = 3, max = 100, message = "Nome deve ter entre 3 e 100 caracteres")
    private String name;

    @NotBlank(message = "Senha é obrigatória")
    @Size(min = 6, max = 20, message = "Senha deve ter entre 6 e 20 caracteres")
    @Pattern(regexp = "^(?=.*[0-9])(?=.*[a-zA-Z]).{6,20}$",
            message = "Senha deve conter letras e números")
    private String password;

    @Pattern(regexp = "^\\d{10,11}$", message = "Telefone deve ter 10 ou 11 dígitos")
    private String phone;

    @NotBlank(message = "Cidade é obrigatória")
    private String city;

    @NotBlank(message = "Estado é obrigatório")
    @Size(min = 2, max = 2, message = "Estado deve ter 2 caracteres")
    private String state;

    private String cep;

    @NotNull(message = "Tipo de usuário é obrigatório")
    private UserType userType;
}