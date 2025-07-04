package com.deliveryMatch.DeliveryMatch.service;

import com.deliveryMatch.DeliveryMatch.dto.AuthRequest;
import com.deliveryMatch.DeliveryMatch.dto.AuthResponse;
import com.deliveryMatch.DeliveryMatch.dto.LoginRequest;
import com.deliveryMatch.DeliveryMatch.dto.RegisterRequest;
import com.deliveryMatch.DeliveryMatch.model.Utilisateur;
import com.deliveryMatch.DeliveryMatch.repository.UtilisateurRepository;
import com.deliveryMatch.DeliveryMatch.security.JwtService;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.HashMap;

@Service
public class AuthService {

    private final UtilisateurRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager manager;

    public AuthService(UtilisateurRepository repository, PasswordEncoder passwordEncoder, JwtService jwtService, AuthenticationManager manager) {
        this.repository = repository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
        this.manager = manager;
    }


    public AuthResponse register(RegisterRequest request) {
        if (repository.findByEmail(request.getEmail()).isPresent()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Email already exists");
        }
        Utilisateur utilisateur = new Utilisateur();
        utilisateur.setNomComplet(request.getNomComplet());
        utilisateur.setEmail(request.getEmail());
        utilisateur.setMotDePasse(passwordEncoder.encode(request.getPassword()));
        utilisateur.setRole(request.getRole() );
        repository.save(utilisateur);
        var jwtToken = jwtService.generateToken(new HashMap<>(),utilisateur);
        AuthResponse response = new AuthResponse();
        response.setToken(jwtToken);
        response.setRole(utilisateur.getRole().name());
        return response;
    }

    public AuthResponse authenticate(AuthRequest request) {
        manager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );

        var user = repository.findByEmail(request.getEmail()).orElseThrow();

        String jwtToken = jwtService.generateToken(user);

        AuthResponse response = new AuthResponse();
        response.setToken(jwtToken);
        response.setRole(user.getRole().name());

        return response;
    }
}
