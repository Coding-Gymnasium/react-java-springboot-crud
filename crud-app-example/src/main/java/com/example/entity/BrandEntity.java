package com.example.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "brand_table")
@Data
public class BrandEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;
}