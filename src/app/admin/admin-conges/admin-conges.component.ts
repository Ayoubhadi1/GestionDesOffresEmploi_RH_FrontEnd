import { CongeService } from './../../_services/conge.service';
import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-admin-conges',
  templateUrl: './admin-conges.component.html',
  styleUrls: ['./admin-conges.component.css']
})
export class AdminCongesComponent implements OnInit {

  currentUser: any;
  token: any;
  headers_object;
  httpOptions;
  conges;


  constructor(private congeService: CongeService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.getHeader();
    this.getCongesAdmin(this.httpOptions);
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

  getCongesAdmin(httpOption) {
    this.congeService.getCongesAdmin(httpOption).subscribe(
      data => {
        this.conges = data;
        console.log(this.conges);
      },
      err => {

        alert(err.error.message);
      }
    )
  }

  accepterconger(id) {
    this.congeService.accepterConge(id, this.httpOptions).subscribe(
      data => {
        alert(data.titre + " est accepté");
        window.location.reload();
      },
      err => {
        alert(err.error.message);
      }
    )
  }

  refuserconger(id) {
    this.congeService.refuserConge(id, this.httpOptions).subscribe(
      data => {
        alert(data.titre + " est refusé");
        window.location.reload();
      },
      err => {
        alert(err.error.message);
      }
    )
  }

}
