package com.example.repository;

import com.example.entity.BrandEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BrandEntityRepository extends JpaRepository<BrandEntity, Long> {
}