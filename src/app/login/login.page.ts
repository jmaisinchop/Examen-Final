import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from '../api/auth.service';
import { User } from '../entidades';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: User = new User();
  constructor(
    private authSvc: AuthService, private router: Router,
    private toastController: ToastController,
  ) { }

  ngOnInit() {
  }

  async googleLogin() {
    console.log('entraaaaaaaaaaaaaa')
    try {

      const res = await this.authSvc.loginGoogle();
      console.log(res)
      if (res == true) {
        this.router.navigate(['/filtros'])
      }
      console.log(res)
    } catch (error) {
      console.log(error)
    }



  }
  async login(password: string) {
    const user = await this.authSvc.login(this.user);
    if (user) {
      this.mostrarMensaje('Ingresado Correctamente')
      this.router.navigateByUrl('/libro')
      localStorage.setItem("login", "true")
      localStorage.setItem("email", "" + user.user?.email)
      localStorage.setItem("password", password)


    }

  }

  async mostrarMensaje(mensaje: any) {
    const toast = await this.toastController.create({
      position: 'top',
      message: mensaje,
      duration: 1500
    });
    toast.present();
  }



}
