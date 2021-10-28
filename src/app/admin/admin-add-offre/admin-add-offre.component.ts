import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OffresEmploiService } from 'src/app/_services/offres-emploi.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-admin-add-offre',
  templateUrl: './admin-add-offre.component.html',
  styleUrls: ['./admin-add-offre.component.css']
})
export class AdminAddOffreComponent implements OnInit {

  offre = {
    titre: '',
    description: '',
    contrat: '',
    dateDebut: '',
    etat: "disponible"
  }

  currentUser: any;
  token: any;
  headers_object;
  httpOptions;

  constructor(private tokenStorage: TokenStorageService, private offresEmploiService: OffresEmploiService) { }

  ngOnInit(): void {
    this.getHeader();
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

  createOffre() {
    this.offresEmploiService.addOffre(this.offre, this.httpOptions).subscribe(
      data => {
        console.log(this.offre);
        alert("l'offre " + this.offre.titre + " ajouté avec succès")
        this.offre = {
          titre: '',
          description: '',
          contrat: '',
          dateDebut: '',
          etat: "disponible"
        }
      },

      err => {
        alert(err.error.message);
      }
    )

  }

}
