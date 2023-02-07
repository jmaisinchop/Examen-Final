import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/api/auth.service';
import { LibrosService } from 'src/app/api/libros.service';
import { Libro } from 'src/app/entidades';

@Component({
  selector: 'app-update-libro',
  templateUrl: './update-libro.page.html',
  styleUrls: ['./update-libro.page.scss'],
})
export class UpdateLibroPage implements OnInit {

  newFile = ''
  libro: Libro = {
    codigoISBN: "",
    autor: "",
    editorial: '',
    foto: '',
    titulo: '',
    categoria: '',
    Cantidad: 0,


  };
  constructor(
    private authSvc: AuthService,
    private libroService: LibrosService,
    private router: Router,
    private toastController: ToastController,
  
    public fb: FormBuilder,

   
  ) { }

  ngOnInit() {
    this.getLibroInfo()

  }
  getLibroInfo(){
    this.libroService.getById( "" + localStorage.getItem("idl")).subscribe(res =>{
      
      this.libro = res;
      console.log(res)
     
    })
  }
  async newImageUpload(event: any) {
    if (event.target.files && event.target.files[0]) {
      const path = 'libro'

      const name = this.libro.titulo;
      this.newFile = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (async (como) => {
        this.libro.foto = como.target?.result as string;
        const res = await this.libroService.uploadImage(this.newFile, path, name);

      });
      reader.readAsDataURL(event.target.files[0]);
    }
  }
   async guardarUser() {
   
   
   this.libroService.update("" + localStorage.getItem("idl"),this.libro,).then(() => {
    console.log('Cita creada exitosamente!' + this.libro)
    this.router.navigate(['/tabinical']);
  });
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
