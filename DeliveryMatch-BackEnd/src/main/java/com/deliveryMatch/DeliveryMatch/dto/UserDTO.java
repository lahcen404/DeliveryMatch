package com.deliveryMatch.DeliveryMatch.dto;

import com.deliveryMatch.DeliveryMatch.enums.Role;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
public class UserDTO {
    private Long id;
    private String nomComplet;
    private String email;
    private Role role;


    public UserDTO(Long id, String name, String email, Role role) {
        this.id = id;
        this.nomComplet = name;
        this.email = email;
        this.role = role;
    }




    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return nomComplet;
    }

    public void setName(String name) {
        this.nomComplet = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }
}
