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
    path: 'inicio',
    loadChildren: () => import('./admin/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'inicio-c',
    loadChildren: () => import('./cliente/inicio-c/inicio-c.module').then( m => m.InicioCPageModule)
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
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
