package com.deliveryMatch.DeliveryMatch.Service;

import com.deliveryMatch.DeliveryMatch.dto.TrajetDto;
import com.deliveryMatch.DeliveryMatch.enums.Role;
import com.deliveryMatch.DeliveryMatch.model.Trajet;
import com.deliveryMatch.DeliveryMatch.model.Utilisateur;
import com.deliveryMatch.DeliveryMatch.repository.TrajetRepository;
import com.deliveryMatch.DeliveryMatch.repository.UtilisateurRepository;
import com.deliveryMatch.DeliveryMatch.service.TrajetService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;

import java.time.LocalDate;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class TrajetServiceTest {

    @Mock
    private TrajetRepository trajetRepository;
    @Mock
    private UtilisateurRepository utilisateurRepository;

    // crée une vraie instance de TrajetService
    @InjectMocks
    private TrajetService trajetService;

    @Test
    void CreateTrajetUserIsDriver() {


        // simule  utilisateur connecté
        Authentication authentication = mock(Authentication.class);
        SecurityContext securityContext = mock(SecurityContext.class);
        when(securityContext.getAuthentication()).thenReturn(authentication);
        SecurityContextHolder.setContext(securityContext);

        // crée un faux conducteur
        Utilisateur driver = new Utilisateur();
        driver.setId(1L);
        driver.setEmail("driver@example.com");
        driver.setRole(Role.DRIVER);

        // crée les informations du trajet
        TrajetDto trajetDto = new TrajetDto(
                "Casablanca",
                "Settat",
                "Marrakech",
                LocalDate.now(),
                "100x50x30 cm",
                "Electronics",
                3
        );

        // retourne email de faux conducteur
        when(authentication.getName()).thenReturn("driver@example.com");
        // cherche un utilisateur par cet email
        when(utilisateurRepository.findByEmail("driver@example.com")).thenReturn(Optional.of(driver));
        // sauvegarder un trajet
        when(trajetRepository.save(any(Trajet.class))).thenAnswer(invocation -> {
            Trajet trajetToSave = invocation.getArgument(0);
            trajetToSave.setId(99L);
            return trajetToSave;
        });



        Trajet createdTrajet = trajetService.createTrajet(trajetDto);



        assertNotNull(createdTrajet);
        assertEquals("Casablanca", createdTrajet.getPointDepart());
        assertEquals(1L, createdTrajet.getConducteur().getId());
        assertEquals(99L, createdTrajet.getId());

        verify(trajetRepository, times(1)).save(any(Trajet.class));
    }
}
