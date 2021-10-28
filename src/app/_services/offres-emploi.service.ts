import { TokenStorageService } from './token-storage.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8082/gestionRH/';

@Injectable({
  providedIn: 'root'
})
export class OffresEmploiService {

  constructor(private http: HttpClient) { }

  getOffres(): Observable<any> {
    return this.http.get(API_URL + 'offreEmploi');
  }

  getOffresForAdmin(httpOption): Observable<any> {
    return this.http.get(API_URL + 'admin/offreEmploi', httpOption);
  }

  getOffreItemForAdmin(id): Observable<any> {
    return this.http.get(API_URL + 'offreEmploi/' + id);
  }

  addOffre(offre, header): Observable<any> {
    return this.http.post(API_URL + 'admin/ajouterOffre', offre, header);
  }

  updateOffre(offre, id, header): Observable<any> {
    return this.http.put(API_URL + 'admin/offreEmploi/' + id, offre, header);
  }

  deleteOffre(id, header): Observable<any> {
    return this.http.delete(API_URL + 'admin/offreEmploi/' + id, header);
  }

  postulation(id: number, httpOption): Observable<any> {
    return this.http.post(API_URL + 'user/postulerOffreEmploi/' + id, null, httpOption);
  }
}
