import { TokenStorageService } from './token-storage.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8082/gestionRH/';
@Injectable({
  providedIn: 'root'
})
export class CongeService {

  constructor(private http: HttpClient) { }

  getCongesAdmin(httpOption): Observable<any> {
    return this.http.get(API_URL + 'admin/conges', httpOption);
  }

  getCongesDe(httpOption): Observable<any> {
    return this.http.get(API_URL + 'employe/conges', httpOption);
  }

  getOneConge(id, httOption): Observable<any> {
    return this.http.get(API_URL + 'employe/conge/' + id, httOption);
  }

  accepterConge(id, httpOption): Observable<any> {
    return this.http.put(API_URL + 'admin/accepterConge/' + id, null, httpOption);
  }

  refuserConge(id, httpOption): Observable<any> {
    return this.http.put(API_URL + 'admin/refuserConge/' + id, null, httpOption);
  }

  addConge(conge, header): Observable<any> {
    return this.http.post(API_URL + 'employe/demanderConge', conge, header);
  }
}
