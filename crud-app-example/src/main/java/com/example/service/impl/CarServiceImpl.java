package com.example.service.impl;

import com.example.dto.CarDTO;
import com.example.entity.CarEntity;
import com.example.repository.BrandEntityRepository;
import com.example.repository.CarEntityRepository;
import com.example.service.CarService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CarServiceImpl implements CarService {

    private final CarEntityRepository carEntityRepository;
    private final BrandEntityRepository brandEntityRepository;
    @Override
    public void save(CarDTO carDTO) {
    }

    @Override
    public List<CarDTO> findAll() {
        return null;
    }

    @Override
    public CarDTO findById(Long id) {
        return null;
    }

    @Override
    public void delete(Long id) {

    }
}