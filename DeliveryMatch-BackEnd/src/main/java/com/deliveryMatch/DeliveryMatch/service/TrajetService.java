package com.deliveryMatch.DeliveryMatch.service;

import com.deliveryMatch.DeliveryMatch.dto.TrajetDto;
import com.deliveryMatch.DeliveryMatch.enums.Role;
import com.deliveryMatch.DeliveryMatch.model.Trajet;
import com.deliveryMatch.DeliveryMatch.model.Utilisateur;
import com.deliveryMatch.DeliveryMatch.repository.TrajetRepository;
import com.deliveryMatch.DeliveryMatch.repository.UtilisateurRepository;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TrajetService {
    private final TrajetRepository trajetRepository;
    private final UtilisateurRepository utilisateurRepository;

    public TrajetService(TrajetRepository trajetRepository, UtilisateurRepository utilisateurRepository) {
        this.trajetRepository = trajetRepository;
        this.utilisateurRepository = utilisateurRepository;
    }

    public Trajet createTrajet(TrajetDto trajetDto){

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication(); // store who is currently logged in
        String email = authentication.getName(); // return email of the currently logged in user

        // find the user by email
        Utilisateur userConducteur = utilisateurRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException(" user not found"));

        if (userConducteur.getRole() != Role.DRIVER) {
            throw new IllegalStateException(" user assigned as a driver must have the 'DRIVER' role");
        }



       Trajet trajet = new Trajet();
       trajet.setPointDepart(trajetDto.pointDepart());
       trajet.setEtapesIntermediaires(trajetDto.etapesIntermediaires());
       trajet.setDestinationFinale(trajetDto.destinationFinale());
       trajet.setDateDepart(trajetDto.dateDepart());
       trajet.setDimensionsMax(trajetDto.dimensionsMax());
       trajet.setTypeMarchandise(trajetDto.typeMarchandise());
       trajet.setCapaciteDisponible(trajetDto.capaciteDisponible());
       trajet.setConducteur(userConducteur);

return trajetRepository.save(trajet);
    }

    // afficher tous les trajets

public List<Trajet> getAllTrajets(){
        return trajetRepository.findAll();
}

// Modifier trajet
    public Trajet updateTrajet(Long id , Trajet trajetDetails){
        Trajet trajet = trajetRepository.findById(id).orElseThrow();
        trajet.setPointDepart(trajetDetails.getPointDepart());
        trajet.setEtapesIntermediaires(trajetDetails.getEtapesIntermediaires());
        trajet.setDestinationFinale(trajetDetails.getDestinationFinale());
        trajet.setDateDepart(trajetDetails.getDateDepart());
        trajet.setDimensionsMax(trajetDetails.getDimensionsMax());
        trajet.setTypeMarchandise(trajetDetails.getTypeMarchandise());
        trajet.setCapaciteDisponible(trajetDetails.getCapaciteDisponible());
        return trajetRepository.save(trajet);
    }

    //get Trajet by id
    public Optional<Trajet> getTrajetById(Long id){
        return trajetRepository.findById(id);
    }

    //delete
    public void deleteTrajet(Long id){
        trajetRepository.deleteById(id);
    }

}
