import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  porcentaje1:number = 50;
  porcentaje2:number = 50;

  constructor() { }

  ngOnInit(): void {
  }

  getPorcentaje(porcent){
    return porcent + '%';
  }

  actualizar(event, porcentaje){
    if(porcentaje === "porcentaje1") return this.porcentaje1 = event;
    if(porcentaje === "porcentaje2") return this.porcentaje2 = event;
  }

}
