package com.example.mapper;

import com.example.dto.CarDTO;
import com.example.entity.CarEntity;
import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;
import org.mapstruct.ReportingPolicy;

@Mapper(
        componentModel = MappingConstants.ComponentModel.SPRING,
        unmappedTargetPolicy = ReportingPolicy.IGNORE
)
public interface CarMapper {
    CarDTO fromCarEntityToCarDTO(CarEntity carEntity);

    CarEntity fromCarDTOToCarEntity(CarDTO carDTO);
}