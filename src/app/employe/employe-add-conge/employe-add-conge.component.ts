import { CongeService } from './../../_services/conge.service';
import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-employe-add-conge',
  templateUrl: './employe-add-conge.component.html',
  styleUrls: ['./employe-add-conge.component.css']
})
export class EmployeAddCongeComponent implements OnInit {

  currentUser: any;
  token: any;
  headers_object;
  httpOptions;

  conge = {
    titre: '',
    description: '',
    dateDebut: '',
    dateFin: '',
    etat: "en cours"
  }
  constructor(private tokenStorage: TokenStorageService, private congeService: CongeService) { }

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

  createConge() {
    this.congeService.addConge(this.conge, this.httpOptions).subscribe(
      data => {
        console.log(this.conge);
        alert("Demande de congé envoyée avec succès")
        this.conge = {
          titre: '',
          description: '',
          dateDebut: '',
          dateFin: '',
          etat: "en cours"
        }
      },

      err => {
        alert(err.error.message);
      }
    )
  }

}
