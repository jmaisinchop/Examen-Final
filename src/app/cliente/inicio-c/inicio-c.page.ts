import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/api/auth.service';
import { User } from 'src/app/entidades';

@Component({
  selector: 'app-inicio-c',
  templateUrl: './inicio-c.page.html',
  styleUrls: ['./inicio-c.page.scss'],
})
export class InicioCPage implements OnInit {
  user: User = new User();
  constructor( private authSvc: AuthService, private router: Router,    private toastController: ToastController,) { }

  ngOnInit() {
  }

  logout(){
    this.authSvc.logout()
    this.router.navigate(['/login'])
  }

 

}
