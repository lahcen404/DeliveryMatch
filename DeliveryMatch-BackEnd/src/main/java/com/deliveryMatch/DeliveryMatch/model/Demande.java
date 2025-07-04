package com.deliveryMatch.DeliveryMatch.model;

import com.deliveryMatch.DeliveryMatch.enums.StatutDemande;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "Demandes")
public class Demande {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String destination;
    private String dimensionsColis;
    private double poidsColis;
    private String typeColis;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private StatutDemande statut;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "expediteur_id", nullable = false)
    private Utilisateur expediteur;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "trajet_id", nullable = false)
    private Trajet trajet;


}

