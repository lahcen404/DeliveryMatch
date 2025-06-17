package com.deliveryMatch.DeliveryMatch.service;

import com.deliveryMatch.DeliveryMatch.dto.TrajetDto;
import com.deliveryMatch.DeliveryMatch.enums.Role;
import com.deliveryMatch.DeliveryMatch.model.Trajet;
import com.deliveryMatch.DeliveryMatch.model.Utilisateur;
import com.deliveryMatch.DeliveryMatch.repository.TrajetRepository;
import com.deliveryMatch.DeliveryMatch.repository.UtilisateurRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TrajetService {
    private final TrajetRepository trajetRepository;
    private final UtilisateurRepository utilisateurRepository;

    public TrajetService(TrajetRepository trajetRepository, UtilisateurRepository utilisateurRepository) {
        this.trajetRepository = trajetRepository;
        this.utilisateurRepository = utilisateurRepository;
    }

    public Trajet createTrajet(TrajetDto trajetDto){

        Utilisateur userConducteur = utilisateurRepository.findById(Long.valueOf(trajetDto.conducteurId())).orElseThrow();

        if (userConducteur.getRole() != Role.DRIVER) {
            throw new IllegalStateException("The user assigned as a driver must have the 'DRIVER' role");
        }

        Long conducteurId = !trajetDto.conducteurId().isEmpty()
                ? Long.parseLong(trajetDto.conducteurId())
                : 0L;



       Trajet trajet = new Trajet();
       trajet.setPointDepart(trajetDto.pointDepart());
       trajet.setEtapesIntermediaires(trajetDto.etapesIntermediaires());
       trajet.setDestinationFinale(trajetDto.destinationFinale());
       trajet.setDateDepart(trajetDto.dateDepart());
       trajet.setDimensionsMax(trajetDto.destinationFinale());
       trajet.setTypeMarchandise(trajetDto.typeMarchandise());
       trajet.setCapaciteDisponible(trajetDto.capaciteDisponible());
       trajet.setConducteur(userConducteur);

return trajetRepository.save(trajet);
    }

    // afficher tous les trajets

public List<Trajet> getAllTrajets(){
        return trajetRepository.findAll();
}
}
