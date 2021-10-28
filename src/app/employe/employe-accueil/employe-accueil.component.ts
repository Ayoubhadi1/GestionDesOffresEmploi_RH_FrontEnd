import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GestionUsersService } from 'src/app/_services/gestion-users.service';
import { OffresEmploiService } from 'src/app/_services/offres-emploi.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-employe-accueil',
  templateUrl: './employe-accueil.component.html',
  styleUrls: ['./employe-accueil.component.css']
})
export class EmployeAccueilComponent implements OnInit {

  currentUser: any;
  token: any;
  headers_object;
  httpOptions;

  nbrUsers = 0;
  nbrEmploye = 0;
  nbrOffres = 0;
  constructor(private gestionUserService: GestionUsersService, private offreService: OffresEmploiService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.getHeader();
    this.getNbrUsers();
    this.getNbrEmployes();
    this.getNbrOffres();
  }

  getNbrUsers() {
    this.gestionUserService.getUsers(this.httpOptions).subscribe(
      data => {
        for (let e of data) {
          if (e.roles[0].name == 'ROLE_USER') {
            this.nbrUsers++;
          }
        }
      }
    )
  }

  getNbrEmployes() {
    this.gestionUserService.getUsers(this.httpOptions).subscribe(
      data => {
        console.log(data)
        for (let e of data) {
          if (e.roles[0].name == 'ROLE_EMPLOYE' || e.roles[0].name == 'ROLE_ADMIN') {
            this.nbrEmploye++;
          }
        }

      }
    )

  }

  getNbrOffres() {
    this.offreService.getOffres().subscribe(
      data => {
        this.nbrOffres = data.length;
      }
    )
  }

  getHeader() {
    this.currentUser = this.tokenStorage.getUser();
    if (this.currentUser != null) {
      this.token = this.currentUser.accessToken;
      this.headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.token);
      this.httpOptions = {
        headers: this.headers_object
      };
    }
  }

}
