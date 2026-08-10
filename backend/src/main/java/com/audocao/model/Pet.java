package com.audocao.model;

import com.audocao.enums.PetStatus;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "pets")
public class Pet {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String species;

    private String breed;
    private Integer age;
    private String size;
    private String color;

    @Column(length = 1000)
    private String description;

    private String photoUrl;
    private String location;
    private boolean vaccinated;
    private boolean neutered;
    private boolean dewormed;

    @Enumerated(EnumType.STRING)
    private PetStatus status;

    @ManyToOne
    @JoinColumn(name = "owner_id")
    private User owner;

    @ManyToOne
    @JoinColumn(name = "adopter_id")
    private User adopter;

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private LocalDateTime adoptedAt;

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
        if (status == null) {
            status = PetStatus.AVAILABLE;
        }
    }

    @PreUpdate
    protected void onUpdate() {
        updatedAt = LocalDateTime.now();
    }
}