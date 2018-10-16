import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from '../servicios/autenticacion.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public user:any;

  constructor(private autService: AutenticacionService,
    private router: Router,
    private activatedRouter: ActivatedRoute) { 

    }

  ngOnInit() {

  }
  isAuth() {
    if(this.autService.isAuthenticated())
      this.user=this.autService.getUserName();
    else
      this.user="";
    return this.autService.isAuthenticated();
    }
    onLogout() {
      this.autService.logout();
      this.router.navigate(['/'])
      }
}
