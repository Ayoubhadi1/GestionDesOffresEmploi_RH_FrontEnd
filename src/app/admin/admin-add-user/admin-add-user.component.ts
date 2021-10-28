import { GestionUsersService } from 'src/app/_services/gestion-users.service';
import { UserService } from './../../_services/user.service';
import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'admin-add-user',
  templateUrl: './admin-add-user.component.html',
  styleUrls: ['./admin-add-user.component.css']
})
export class AdminAddUserComponent implements OnInit {

  user = {
    username: '',
    email: '',
    password: '',
    salaire: 0,
    poste: '',
    domaine: '',
    roles: []
  }

  currentUser: any;
  token: any;
  headers_object;
  httpOptions;


  roles = ['admin', 'employe'];



  constructor(private gestionUsers: GestionUsersService, private tokenStorage: TokenStorageService) { }

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

  createPersonnel() {
    this.gestionUsers.addPersonnel(this.user, this.httpOptions).subscribe(
      data => {
        console.log(this.user);
        alert(this.user.username + ' est ajouté avec succès');
        this.user = {
          username: '',
          email: '',
          password: '',
          salaire: 0,
          poste: '',
          domaine: '',
          roles: []
        }
      },

      err => {
        alert(err.error.message);
      }
    )
  }



}
