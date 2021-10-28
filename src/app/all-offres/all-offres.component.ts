import { OffresEmploiService } from './../_services/offres-emploi.service';
import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-all-offres',
  templateUrl: './all-offres.component.html',
  styleUrls: ['./all-offres.component.css']
})
export class AllOffresComponent implements OnInit {


  constructor(private offreService: OffresEmploiService, private tokenStorage: TokenStorageService) { }

  currentUser: any;
  token: any;
  headers_object;
  httpOptions;

  isUser: boolean;

  isLoggedIn;

  offresEmploi: any[];

  ngOnInit(): void {
    this.getOffres();
    this.currentUser = this.tokenStorage.getUser();
    if (this.currentUser != null) {
      this.token = this.currentUser.accessToken;
      this.headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.token);
      this.httpOptions = {
        headers: this.headers_object
      };
    }
    if (this.currentUser) {
      this.isUser = this.currentUser.roles.includes('ROLE_USER');
    }

    this.isLoggedIn = !!this.tokenStorage.getToken();
  }

  getOffres() {
    this.offreService.getOffres().subscribe(
      data => {
        this.offresEmploi = data;
        console.log(this.offresEmploi);

      },
      err => {
        alert('Erreur inattendu');
      }
    );
  }

  postuler(id) {
    this.offreService.postulation(id, this.httpOptions).subscribe(
      data => {
        alert("Postulation effectuée")
      },
      err => {
        if (err.status == 401) {
          err.error.message = "veuillez se connecter";

        }
        alert(err.error.message);
      }
    )

  }

}
