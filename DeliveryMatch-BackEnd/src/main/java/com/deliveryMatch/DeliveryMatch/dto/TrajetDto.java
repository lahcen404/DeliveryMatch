package com.deliveryMatch.DeliveryMatch.dto;


import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDate;


public record TrajetDto(
        @NotBlank(message = "Le point de départ est obligatoire")
        String pointDepart,

        String etapesIntermediaires,

        @NotBlank(message = "La destination finale est obligatoire")
        String destinationFinale,

        @NotNull(message = "La date de départ est obligatoire")
        LocalDate dateDepart,

        String dimensionsMax,

        String typeMarchandise,

        @Min(value = 1, message = "La capacité disponible doit être au moins 1")
        int capaciteDisponible,

        @NotNull(message = "ID du conducteur est obligatoire")
        String conducteurId

        ){

}
