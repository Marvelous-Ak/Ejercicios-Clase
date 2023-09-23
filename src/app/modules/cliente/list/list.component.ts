import { Component } from '@angular/core';
import { IProducto } from 'src/app/shared/data';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  productos:IProducto[]=[];
  //titulo: String ="esta es una prueba";
  //titulo2:String ="si esta jalando esta baina";
}
