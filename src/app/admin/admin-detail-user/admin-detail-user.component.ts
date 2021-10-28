import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GestionUsersService } from 'src/app/_services/gestion-users.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-admin-detail-user',
  templateUrl: './admin-detail-user.component.html',
  styleUrls: ['./admin-detail-user.component.css']
})
export class AdminDetailUserComponent implements OnInit {

  currentUser: any;
  token: any;
  headers_object;
  httpOptions;
  user = {
    username: '',
    email: '',
    password: '',
    salaire: 0,
    poste: '',
    domaine: '',
    roles: []
  }
  id: number;

  constructor(private route: ActivatedRoute, private gestionUserService: GestionUsersService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.getHeader();
    this.id = +this.route.snapshot.paramMap.get('id');
    this.getDataUser(this.id);
    console.log(this.user)
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

  getDataUser(id) {
    this.gestionUserService.getOneUser(id, this.httpOptions).subscribe(
      data => {
        this.user = data;
        console.log(data)
      }
    )
  }

}
