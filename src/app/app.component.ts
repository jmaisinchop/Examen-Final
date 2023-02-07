import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from './api/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router, private authSvc: AuthService,    private toastController: ToastController,) {}

  cerrarSesion() {
    localStorage.removeItem("login")
    localStorage.removeItem("uid")
    localStorage.removeItem("email")
    localStorage.removeItem("password")
    
    

    this.router.navigateByUrl('/login')

  }

  
  cerrarSesionGmail() {

    this.authSvc.logout()
    this.router.navigate(['/login'])
  
    
    localStorage.removeItem('idC')
    localStorage.removeItem('nombreC')
    localStorage.removeItem('Fotho')
    localStorage.removeItem('EmailC')



  }
}
