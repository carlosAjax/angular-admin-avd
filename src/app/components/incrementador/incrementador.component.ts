import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {
@Input('valor')
  progreso: number = 50;
@Input() colorBtn: string = 'btn-danger'

  @Output()
  valorSalida: EventEmitter<number>= new EventEmitter();
 
  get getProgreso(){
    return `${this.progreso}%`;
  }
  
  constructor() { }

  ngOnInit(): void {
    this.colorBtn = `btn ${this.colorBtn}`;
  }

  cambiarValor(valor:number){
    if(this.progreso >= 100 && valor >= 0){
      this.valorSalida.emit(100);
      this.progreso = 100;
      return;
    }
    if(this.progreso <= 0 && valor < 0){
      this.valorSalida.emit(0);
      this.progreso = 0;
      return;
    }
    
    this.progreso  += valor;
    this.valorSalida.emit(this.progreso);
  }

  onChange(nuevoValor:number){
    if(this.progreso > 100){
      this.progreso = 100;
    }else if(this.progreso < 0){
      this.progreso = 0;
    }else{
      this.progreso = nuevoValor;
    }
    this.valorSalida.emit(this.progreso);
  }

}
