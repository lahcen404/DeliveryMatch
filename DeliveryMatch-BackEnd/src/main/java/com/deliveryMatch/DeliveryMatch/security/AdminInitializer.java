package com.deliveryMatch.DeliveryMatch.security;

import com.deliveryMatch.DeliveryMatch.enums.Role;
import com.deliveryMatch.DeliveryMatch.model.Utilisateur;
import com.deliveryMatch.DeliveryMatch.repository.UtilisateurRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class AdminInitializer {
    @Bean
    CommandLineRunner createAdmin(UtilisateurRepository userRepository, PasswordEncoder passwordEncoder) {
        return args -> {
            if (userRepository.findByEmail("lahcen.maskour2003@gmail.com").isEmpty()) {
                Utilisateur admin = new Utilisateur();
                admin.setNomComplet("Admin");
                admin.setEmail("lahcen.maskour2003@gmail.com");
                admin.setMotDePasse(passwordEncoder.encode("admin123"));
                admin.setRole(Role.ADMIN);

                userRepository.save(admin);
                System.out.println("✅ Admin user created: lahcen.maskour2003@gmail.com / admin123");
            } else {
                System.out.println("ℹ️ Admin user already exists");
            }
        };
    }
}

