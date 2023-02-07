import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../api/auth.service';
import { User } from '../entidades';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  user: User = new User();
  constructor(
    private authSvc: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  async register(password:string) {
    const user = await this.authSvc.register(this.user);
    if (user) {
      console.log("Usuario Creado")
      this.router.navigateByUrl('/inicio')
      localStorage.setItem("login", "true")

      localStorage.setItem("email", ""+user.user?.email)
      localStorage.setItem("password", password)

      const res = await this.authSvc.getUid();
      localStorage.setItem("uid", "" + res)
    }
  }

}
