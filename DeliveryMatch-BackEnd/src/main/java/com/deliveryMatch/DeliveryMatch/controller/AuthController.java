package com.deliveryMatch.DeliveryMatch.controller;

import com.deliveryMatch.DeliveryMatch.dto.AuthRequest;
import com.deliveryMatch.DeliveryMatch.dto.AuthResponse;
import com.deliveryMatch.DeliveryMatch.dto.RegisterRequest;
import com.deliveryMatch.DeliveryMatch.service.AuthService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1/auth")
//@RequiredArgsConstructor
public class AuthController {

    private final AuthService service;

    public AuthController(AuthService service) {
        this.service = service;
    }


    @PostMapping("/register")
    public ResponseEntity<AuthResponse> register(
            @RequestBody RegisterRequest request
    ) {
        return ResponseEntity.ok(service.register(request));

    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthResponse> register(
            @RequestBody AuthRequest request
    ) {
        return ResponseEntity.ok(service.authenticate(request));
    }
}
