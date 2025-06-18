import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Trajet} from '../../../shared/models/trajet';

@Injectable({
  providedIn: 'root'
})
export class DriverService {
apiUrl = "http://localhost:8080/api/trajets"
  constructor(private http: HttpClient) { }

getAllTrajets(): Observable<Trajet[]> {
  return this.http.get<Trajet[]>(this.apiUrl)
}

addTrajet(trajet: Trajet) : Observable<Trajet>{
  return this.http.post<Trajet>(this.apiUrl,trajet)
}

  updateTrajet(id: number, trajet: Trajet): Observable<Trajet> {
    return this.http.put<Trajet>(`${this.apiUrl}/${id}`, trajet);
  }


}
