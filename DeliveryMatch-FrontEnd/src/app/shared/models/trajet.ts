export interface Trajet {
  id?: number;
  pointDepart: string;
  destinationFinale: string;
  etapesIntermediaires: string;
  dateDepart: string;
  capaciteDisponible: number;
  dimensionsMax: string;
  typeMarchandise: string;
  idConducteur?: number;
}
