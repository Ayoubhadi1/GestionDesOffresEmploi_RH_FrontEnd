import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-user-postulations',
  templateUrl: './user-postulations.component.html',
  styleUrls: ['./user-postulations.component.css']
})
export class UserPostulationsComponent implements OnInit {

  id: number;
  postulations;
  currentUser: any;
  token: any;
  headers_object;
  httpOptions;

  constructor(private route: ActivatedRoute, private userService: UserService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.getHeader();
    this.id = +this.route.snapshot.paramMap.get('id');
    this.getPostulations(this.id, this.httpOptions);
    console.log(this.id);

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

  getPostulations(id, http) {
    this.userService.getOffreDe(id, http).subscribe(
      data => {
        this.postulations = data;
      },
      err => {
        alert(err.error.message);
      }
    )
  }

}
