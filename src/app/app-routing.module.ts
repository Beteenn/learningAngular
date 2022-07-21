import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AgendarComponent } from './pages/agendar/agendar.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'agendar', component: AgendarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
