package com.deliveryMatch.DeliveryMatch.model; // Assurez-vous que le package est correct

import com.deliveryMatch.DeliveryMatch.enums.Role;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import jakarta.persistence.*; // Utilisez jakarta.persistence
import java.util.Collection;
import java.util.List;

@Entity
public class Utilisateur implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nom_complet", nullable = false)
    private String nomComplet;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(name = "mot_de_passe", nullable = false)
    private String motDePasse;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Role role;

    @Column(name = "est_verifie")
    private boolean estVerifie = false;

    @OneToMany(mappedBy = "conducteur", cascade = CascadeType.ALL)
    private List<Trajet> trajetsPublies;

    @OneToMany(mappedBy = "expediteur", cascade = CascadeType.ALL)
    private List<Demande> demandesFaites;

    // --- Getters et Setters manuels ---

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNomComplet() {
        return nomComplet;
    }

    public void setNomComplet(String nomComplet) {
        this.nomComplet = nomComplet;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMotDePasse() {
        return motDePasse;
    }

    public void setMotDePasse(String motDePasse) {
        this.motDePasse = motDePasse;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public boolean isEstVerifie() {
        return estVerifie;
    }

    public void setEstVerifie(boolean estVerifie) {
        this.estVerifie = estVerifie;
    }

    public List<Trajet> getTrajetsPublies() {
        return trajetsPublies;
    }

    public void setTrajetsPublies(List<Trajet> trajetsPublies) {
        this.trajetsPublies = trajetsPublies;
    }

    public List<Demande> getDemandesFaites() {
        return demandesFaites;
    }

    public void setDemandesFaites(List<Demande> demandesFaites) {
        this.demandesFaites = demandesFaites;
    }


    // --- MÉTHODES REQUISES PAR USERDETAILS (Implémentation Correcte) ---

    @Override
    public String getPassword() {
        return motDePasse;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    // --- MODIFICATION IMPORTANTE ICI ---
    // Cette méthode est obligatoire et ne peut pas retourner 'null'.
    // Elle doit retourner le rôle de l'utilisateur pour la génération du token JWT.
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(role.name()));
    }
}
