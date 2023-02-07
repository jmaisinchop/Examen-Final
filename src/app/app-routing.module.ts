import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },


  {
    path: 'libro',
    loadChildren: () => import('./admin/libro/libro.module').then( m => m.LibroPageModule)
  },
  {
    path: 'crear-libro',
    loadChildren: () => import('./admin/crear-libro/crear-libro.module').then( m => m.CrearLibroPageModule)
  },
  {
    path: 'update-libro',
    loadChildren: () => import('./admin/update-libro/update-libro.module').then( m => m.UpdateLibroPageModule)
  },
  {
    path: 'disponible',
    loadChildren: () => import('./admin/disponible/disponible.module').then( m => m.DisponiblePageModule)
  },
  {
    path: 'nodisponible',
    loadChildren: () => import('./admin/nodisponible/nodisponible.module').then( m => m.NodisponiblePageModule)
  },
  {
    path: 'listar',
    loadChildren: () => import('./admin/listar/listar.module').then( m => m.ListarPageModule)
  },
  {
    path: 'filtros',
    loadChildren: () => import('./cliente/filtros/filtros.module').then( m => m.FiltrosPageModule)
  },
  {
    path: 'reservados',
    loadChildren: () => import('./cliente/reservados/reservados.module').then( m => m.ReservadosPageModule)
  },
  {
    path: 'reservar',
    loadChildren: () => import('./cliente/reservar/reservar.module').then( m => m.ReservarPageModule)
  },
  {
    path: 'tab1',
    loadChildren: () => import('./tab1/tab1.module').then( m => m.Tab1PageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
