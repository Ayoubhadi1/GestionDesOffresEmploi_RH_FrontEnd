import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8082/gestionRH/';
@Injectable({
  providedIn: 'root'
})
export class GestionUsersService {

  constructor(private http: HttpClient) { }

  getUsers(httpOption): Observable<any> {
    return this.http.get(API_URL + 'admin/users', httpOption);
  }

  getOneUser(id, httOption): Observable<any> {
    return this.http.get(API_URL + 'admin/user/' + id, httOption);
  }

  addPersonnel(personnel, header): Observable<any> {
    return this.http.post(API_URL + 'admin/ajouterPersonnel', personnel, header);
  }

  updateUser(user, id, header): Observable<any> {
    return this.http.put(API_URL + 'admin/user/' + id, user, header);
  }

  deleteUser(id, header): Observable<any> {
    return this.http.delete(API_URL + 'admin/user/' + id, header);
  }
}
