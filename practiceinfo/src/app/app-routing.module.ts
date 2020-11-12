import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdduserComponent } from './components/adduser/adduser.component';
import { HomeComponent } from './components/home/home.component';
import { ListuserComponent } from './components/listuser/listuser.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'listuser', component:ListuserComponent},
  {path:'login', component:LoginComponent},
  {path:'adduser', component:AdduserComponent},
  {path: '' , component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
