import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GestionUsersService } from 'src/app/_services/gestion-users.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

  currentUser: any;
  token: any;
  headers_object;
  httpOptions;

  users;



  constructor(private gestionUsersService: GestionUsersService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.getHeader();
    this.getUsers();

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

  getUsers() {
    this.gestionUsersService.getUsers(this.httpOptions).subscribe(
      data => {
        this.users = data;
        console.log(this.users);
      },
      err => {

        alert(err.error.message);
      }
    )
  }

  deleteUser(user) {
    this.gestionUsersService.deleteUser(user.id, this.httpOptions).subscribe(
      data => {
        let index = this.users.indexOf(user);
        this.users.splice(index, 1);
        alert("suppression avec succès");
      },
      err => {
        alert(err.error.message);
      }
    )
  }



}
