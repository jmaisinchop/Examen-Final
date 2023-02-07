import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/api/auth.service';
import { LibrosService } from 'src/app/api/libros.service';
import { Libro } from 'src/app/entidades';

@Component({
  selector: 'app-crear-libro',
  templateUrl: './crear-libro.page.html',
  styleUrls: ['./crear-libro.page.scss'],
})
export class CrearLibroPage implements OnInit {
  libro: Libro = {
    codigoISBN: "",
    autor: "",
    editorial: '',
    foto: '',
    titulo: '',
    categoria: '',
    Cantidad: 0,


  };
  newFile: any;
  uid = '';

  constructor(
    private authSvc: AuthService,
    private pacienteService: LibrosService,
    private router: Router,
    public fb: FormBuilder,

    public servicelibro: LibrosService,

  ) { }
  async ngOnInit() {
    const uid = await this.authSvc.getUid();
    console.log(uid);

  }

  initPaciente() {
    this.uid = ""+localStorage.getItem("uid");
    this.libro = {
      codigoISBN: "",
    autor: "",
    editorial: '',
    foto: '',
    titulo: '',
    categoria: '',
    Cantidad: 0,




    };
  }


  async newImageUpload(event: any) {
    if (event.target.files && event.target.files[0]) {
      this.newFile = event.target.files[0];
      const reader = new FileReader();
      reader.onload = ((como) => {
        this.libro.foto = como.target?.result as string;
      });
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  async guardarUser() {
     console.log("entra")
     const path = 'libro';
    
     const name = this.libro.titulo;
     if (this.newFile !== undefined) {
       const res = await this.servicelibro.uploadImage(this.newFile, path, name);
       this.libro.foto = res;
     }
     console.log(this.libro)
     this.servicelibro.create(this.libro).then(() => {
       console.log('Cita creada exitosamente!' + this.libro)
       this.router.navigate(['/libro']);
     });
   }

}
