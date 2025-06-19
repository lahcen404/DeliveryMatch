package com.deliveryMatch.DeliveryMatch.controller;

import com.deliveryMatch.DeliveryMatch.dto.TrajetDto;
import com.deliveryMatch.DeliveryMatch.model.Trajet;
import com.deliveryMatch.DeliveryMatch.service.TrajetService;
import jakarta.validation.Valid;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @GetMapping
    public List<Trajet> getAllTrajets(){
        return trajetService.getAllTrajets();
    }

    @PutMapping("/{id}")
    public Trajet updateTrajet(@PathVariable Long id , @RequestBody Trajet trajet){
        return trajetService.updateTrajet(id,trajet);
    }

    @GetMapping("{id}")
    public Trajet getTrajetById(@PathVariable Long id){
        return trajetService.getTrajetById(id).orElseThrow();
    }

    @DeleteMapping("{id}")
    public void deleteTrajet(@PathVariable Long id){
        trajetService.deleteTrajet(id);
    }

}
