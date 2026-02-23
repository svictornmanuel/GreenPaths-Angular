import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RutasComponent } from './pages/rutas/rutas.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { RestablecerComponent } from './pages/restablecer/restablecer.component';
import { RecuperarComponent } from './pages/recuperar/recuperar.component';

// Definimos las rutas
const routes: Routes = [
    { path: '', component: HomeComponent }, 
    { path: 'rutas', component: RutasComponent},
    { path: 'login', component: LoginComponent},
    { path: 'resgistro', component: RegistroComponent},
    { path: 'restablecer', component: RestablecerComponent },
    { path: 'recuperar', component: RecuperarComponent},
    { path: 'perfil', component: PerfilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
