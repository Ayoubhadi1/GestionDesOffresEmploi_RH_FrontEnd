import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GestionUsersService } from 'src/app/_services/gestion-users.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-admin-edit-user',
  templateUrl: './admin-edit-user.component.html',
  styleUrls: ['./admin-edit-user.component.css']
})
export class AdminEditUserComponent implements OnInit {

  id: number;

  user = {
    username: '',
    email: '',
    password: '',
    salaire: 0,
    poste: '',
    domaine: '',
    roles: []
  }

  roles = ['admin', 'employe'];

  currentUser: any;
  token: any;
  headers_object;
  httpOptions;

  constructor(private nav: Router, private route: ActivatedRoute, private gestionUserService: GestionUsersService, private tokenStorage: TokenStorageService) { }


  ngOnInit(): void {
    this.getHeader();
    this.id = +this.route.snapshot.paramMap.get('id');
    this.getDataUser(this.id);
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
      }
    )
  }

  editUser(user) {
    this.gestionUserService.updateUser(user, this.id, this.httpOptions).subscribe(
      data => {
        alert("Personnel modifié avec succès");
        this.nav.navigate(['admin/users']);
      }
    )
  }

}
