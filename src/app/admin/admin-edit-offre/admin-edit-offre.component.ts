import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OffresEmploiService } from 'src/app/_services/offres-emploi.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-admin-edit-offre',
  templateUrl: './admin-edit-offre.component.html',
  styleUrls: ['./admin-edit-offre.component.css']
})
export class AdminEditOffreComponent implements OnInit {

  id: number;

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

  constructor(private nav: Router, private route: ActivatedRoute, private offresEmploiService: OffresEmploiService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.getHeader();
    this.id = +this.route.snapshot.paramMap.get('id');
    this.getDataOffre(this.id);
  }

  getDataOffre(id) {
    this.offresEmploiService.getOffreItemForAdmin(id).subscribe(
      data => {
        this.offre = data;
      }
    )
  }

  editOffre(offre) {
    this.offresEmploiService.updateOffre(offre, this.id, this.httpOptions).subscribe(
      data => {
        alert("Offre modifié avec succès");
        this.nav.navigate(['admin/offresEmploi']);
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
