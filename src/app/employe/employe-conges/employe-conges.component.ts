import { CongeService } from './../../_services/conge.service';
import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-employe-conges',
  templateUrl: './employe-conges.component.html',
  styleUrls: ['./employe-conges.component.css']
})
export class EmployeCongesComponent implements OnInit {

  currentUser: any;
  token: any;
  headers_object;
  httpOptions;
  conges;


  constructor(private tokenStorage: TokenStorageService, private congeService: CongeService) { }

  ngOnInit(): void {
    this.getHeader();
    this.getCongesForEmploye(this.httpOptions);

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

  getCongesForEmploye(httpOption) {
    this.congeService.getCongesDe(httpOption).subscribe(
      data => {
        this.conges = data;
        console.log("data " + this.conges)
      },
      err => {
        alert(err.error.message);
      }
    )
  }



}
