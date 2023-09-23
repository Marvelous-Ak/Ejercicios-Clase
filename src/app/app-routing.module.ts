import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"home",loadChildren:()=>import("./modules/home/home.module").then(m=>m.HomeModule)},
  {path:"Cliente",loadChildren:()=>import("./modules/cliente/cliente.module").then(c=>c.ClienteModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
