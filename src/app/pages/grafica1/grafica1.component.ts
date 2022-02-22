import { Component, } from '@angular/core';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component  {

  public labels1: string[] = [ 'Ventas', 'Almacen', 'Pedidos' ];
  public data1 = [123, 20,68];
  public labels2: string[] = [ 'pan', 'leche', 'cafe' ];
  public data2 = [10, 98,15];
  public labels3: string[] = [ 'refreco', 'vino', 'agua' ];
  public data3 = [79, 98,2];
  public labels4: string[] = [ 'bala', 'pistola', 'rifle' ];
  public data4 = [12, 80,90];


  

}
