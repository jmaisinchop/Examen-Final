import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { map } from 'rxjs';
import { AuthService } from 'src/app/api/auth.service';
import { ReservarService } from 'src/app/api/reservar.service';
import { Reservar } from 'src/app/entidades';

@Component({
  selector: 'app-reservados',
  templateUrl: './reservados.page.html',
  styleUrls: ['./reservados.page.scss'],
})
export class ReservadosPage implements OnInit {
  reservadas:Reservar[]=[]
  libros1:any=[]
  handlerMessage = '';
  roleMessage = '';
  constructor(
    private alertController: AlertController,
    private authSvc: AuthService,
    private reservarService: ReservarService,
    private router: Router,) { }

  ngOnInit() {
   
    this.listAllCitas()
  }

  listAllCitas(){
   
    this.reservarService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {


      this.reservadas = data;
      //console.log(this.citas);
      for (let index = 0; index <this.reservadas?.length; index++) {
        if(this.reservadas[index].uid==""+localStorage.getItem("idC")){
          
          
           this.libros1.push(this.reservadas[index])
         
       }
    
     }

      
    console.log(""+localStorage.getItem("uid"))
    console.log(this.reservadas);
   
  console.log(this.libros1);
      
    });
    
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
