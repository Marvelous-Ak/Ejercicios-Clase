import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { MenuComponent } from './menu/menu.component';
import { FouterComponent } from './fouter/fouter.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';


const routes: Routes = [
  {path:"",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
