package com.audocao;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.scheduling.annotation.EnableAsync;

@SpringBootApplication
@EnableAsync
@EnableConfigurationProperties

public class AudocaoApplication {

    public static void main(String[] args) {
        SpringApplication.run(AudocaoApplication.class, args);
        System.out.println("🚀 Audoção API iniciada com sucesso!");
        System.out.println("📝 Acesse: http://localhost:8080");
        System.out.println("🔐 H2 Console: http://localhost:8080/h2-console (se usando H2)");
    }
}