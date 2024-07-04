package com.example.controller;

import com.example.dto.ErrorDTO;
import com.example.exception.NotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.time.LocalDateTime;

@ControllerAdvice
public class ControllerAdvisor {

    @ExceptionHandler(value = {NotFoundException.class})
    public ResponseEntity<ErrorDTO> handleNotFoundException(NotFoundException exception) {
        return ResponseEntity.badRequest().body(ErrorDTO.builder()
                .message(exception.getMessage())
                .time(LocalDateTime.now())
                .build());
    }
}