package entity;

import jakarta.persistence.*;
import lombok.Data;

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

    @ElementCollection
    private List<String> etapesIntermediaires;

    @Column(nullable = false)
    private String destinationFinale;

    @Temporal(TemporalType.TIMESTAMP)
    private Date dateDepart;

    private String dimensionsMax;
    private String typeMarchandise;
    private int capaciteDisponible;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "conducteur_id", nullable = false)
    private Utilisateur conducteur;

    @OneToMany(mappedBy = "trajet", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Demande> demandesRecues;
}
