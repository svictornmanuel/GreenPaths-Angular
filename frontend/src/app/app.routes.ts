import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RutasComponent } from './pages/rutas/rutas.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';
import { RecuperarComponent } from './pages/recuperar/recuperar.component';
import { RestablecerComponent } from './pages/restablecer/restablecer.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { AdminRutasComponent } from './pages/admin/rutas/rutas.component';
import { AdminRutaFormComponent } from './pages/admin/rutas-form/ruta-form.component';
import { NotFoundComponent } from './pages/error/not-found/not-found.component';
import { AccesoDenegadoComponent } from './pages/error/acceso-denegado/acceso-denegado.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'rutas', component: RutasComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'recuperar-contrasena', component: RecuperarComponent },
  { path: 'restablecer-contrasena/:token', component: RestablecerComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'admin/rutas', component: AdminRutasComponent },
  { path: 'admin/rutas/crear', component: AdminRutaFormComponent },
  { path: 'admin/rutas/editar/:id', component: AdminRutaFormComponent },
  { path: 'acceso-denegado', component: AccesoDenegadoComponent },
  { path: '**', component: NotFoundComponent },
];
