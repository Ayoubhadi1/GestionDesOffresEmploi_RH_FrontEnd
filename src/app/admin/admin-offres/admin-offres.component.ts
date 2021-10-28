import { OffresEmploiService } from './../../_services/offres-emploi.service';
import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-admin-offres',
  templateUrl: './admin-offres.component.html',
  styleUrls: ['./admin-offres.component.css']
})
export class AdminOffresComponent implements OnInit {

  currentUser: any;
  token: any;
  headers_object;
  httpOptions;
  offres;

  constructor(private offreEmploiService: OffresEmploiService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.getHeader();
    this.getOffresForAdmin(this.httpOptions);
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

  getOffresForAdmin(httpOption) {
    this.offreEmploiService.getOffresForAdmin(httpOption).subscribe(
      data => {
        this.offres = data;
        console.log(this.offres)
      },
      err => {
        alert(err.error.message);
      }
    );
  }

  deleteOffre(offre) {
    this.offreEmploiService.deleteOffre(offre.id, this.httpOptions).subscribe(
      data => {
        let index = this.offres.indexOf(offre);
        this.offres.splice(index, 1);
        alert("suppression avec succès");
      },
      err => {
        alert(err.error.message);
      }
    )
  }


}
