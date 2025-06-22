package com.deliveryMatch.DeliveryMatch.controller;

import com.deliveryMatch.DeliveryMatch.repository.TrajetRepository;
import com.deliveryMatch.DeliveryMatch.repository.UtilisateurRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.security.access.prepost.PreAuthorize;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = "*")
public class AdminController {


        private final UtilisateurRepository utilisateurRepository;
        private final TrajetRepository trajetRepository;

        public AdminController(UtilisateurRepository utilisateurRepository, TrajetRepository trajetRepository) {
            this.utilisateurRepository = utilisateurRepository;
            this.trajetRepository = trajetRepository;
        }

    @PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("/stats")
        public Map<String, Object> getStats() {
            Map<String, Object> stats = new HashMap<>();
            stats.put("totalUsers", utilisateurRepository.count());
            stats.put("totalTrips", trajetRepository.count());
            return stats;
        }


}
