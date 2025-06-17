package com.deliveryMatch.DeliveryMatch.model;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;
@Entity
@Data
public class Trajet {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String pointDepart;


    private String etapesIntermediaires;

    @Column(nullable = false)
    private String destinationFinale;

    private LocalDate dateDepart;

    private String dimensionsMax;
    private String typeMarchandise;
    private int capaciteDisponible;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "conducteur_id", nullable = false)
    private Utilisateur conducteur;

    @OneToMany(mappedBy = "trajet", cascade = CascadeType.ALL)
    private List<Demande> demandesRecues;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPointDepart() {
        return pointDepart;
    }

    public void setPointDepart(String pointDepart) {
        this.pointDepart = pointDepart;
    }

    public String getEtapesIntermediaires() {
        return etapesIntermediaires;
    }

    public void setEtapesIntermediaires(String etapesIntermediaires) {
        this.etapesIntermediaires = etapesIntermediaires;
    }

    public String getDestinationFinale() {
        return destinationFinale;
    }

    public void setDestinationFinale(String destinationFinale) {
        this.destinationFinale = destinationFinale;
    }

    public LocalDate getDateDepart() {
        return dateDepart;
    }

    public void setDateDepart(LocalDate dateDepart) {
        this.dateDepart = dateDepart;
    }

    public String getDimensionsMax() {
        return dimensionsMax;
    }

    public void setDimensionsMax(String dimensionsMax) {
        this.dimensionsMax = dimensionsMax;
    }

    public String getTypeMarchandise() {
        return typeMarchandise;
    }

    public void setTypeMarchandise(String typeMarchandise) {
        this.typeMarchandise = typeMarchandise;
    }

    public int getCapaciteDisponible() {
        return capaciteDisponible;
    }

    public void setCapaciteDisponible(int capaciteDisponible) {
        this.capaciteDisponible = capaciteDisponible;
    }

    public Utilisateur getConducteur() {
        return conducteur;
    }

    public void setConducteur(Utilisateur conducteur) {
        this.conducteur = conducteur;
    }

    public List<Demande> getDemandesRecues() {
        return demandesRecues;
    }

    public void setDemandesRecues(List<Demande> demandesRecues) {
        this.demandesRecues = demandesRecues;
    }
}
