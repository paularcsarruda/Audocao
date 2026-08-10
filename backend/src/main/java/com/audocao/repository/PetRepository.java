package com.audocao.repository;

import com.audocao.model.Pet;
import com.audocao.enums.PetStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PetRepository extends JpaRepository<Pet, Long> {
    List<Pet> findByStatus(PetStatus status);
    List<Pet> findByOwnerId(Long ownerId);
    List<Pet> findBySpeciesAndStatus(String species, PetStatus status);
    List<Pet> findBySizeAndStatus(String size, PetStatus status);

    @Query("SELECT p FROM Pet p WHERE p.status = :status AND p.age <= :maxAge")
    List<Pet> findByStatusAndMaxAge(@Param("status") PetStatus status, @Param("maxAge") Integer maxAge);

    @Query("SELECT p FROM Pet p WHERE p.status = 'AVAILABLE' AND " +
            "(:species IS NULL OR p.species = :species) AND " +
            "(:size IS NULL OR p.size = :size)")
    List<Pet> filterPets(@Param("species") String species, @Param("size") String size);
}