import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-board-employe',
  templateUrl: './board-employe.component.html',
  styleUrls: ['./board-employe.component.css']
})
export class BoardEmployeComponent implements OnInit {
  content = '';
  currentUser: any;
  constructor(private userService: UserService, private token: TokenStorageService) { }

  ngOnInit() {
    this.userService.getEmployeBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );

    this.currentUser = this.token.getUser();
  }
}