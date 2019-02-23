import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'app/account-manager/authentication.service';
import { Usuario } from 'app/account-manager/usuario';

@Component({
  selector: 'mt-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  currentUser: Usuario;
  
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) { 
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit() {
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
