package com.deliveryMatch.DeliveryMatch.controller;

import com.deliveryMatch.DeliveryMatch.dto.TrajetDto;
import com.deliveryMatch.DeliveryMatch.model.Trajet;
import com.deliveryMatch.DeliveryMatch.service.TrajetService;
import jakarta.validation.Valid;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/trajets")
public class TrajetController {

    private final TrajetService trajetService;

    public TrajetController(TrajetService trajetService) {
        this.trajetService = trajetService;
    }

    @PreAuthorize("hasAuthority('DRIVER')")
    @PostMapping
    public Trajet createTrajet(@Valid @RequestBody TrajetDto trajetDto){
        return trajetService.createTrajet(trajetDto);
    }
}
