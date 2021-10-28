import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showEmployeBoard = false;
  username: string;
  currentUser;
  isUser: boolean;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    this.currentUser = this.tokenStorageService.getUser();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showEmployeBoard = this.roles.includes('ROLE_EMPLOYE');

      this.username = user.username;
    }
    if (this.currentUser) {
      this.isUser = this.currentUser.roles.includes('ROLE_USER');
    }

    console.log(this.isUser + " et " + this.isLoggedIn);
  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}