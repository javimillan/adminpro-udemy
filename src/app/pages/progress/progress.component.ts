import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

    porcentaje1: number = 20;
    porcentaje2: number = 30;

  constructor() { }

  ngOnInit(): void {
  }

  actualizar(event: number, name: string){
    console.log(event)
    if(name === 'porcentaje1') { this.porcentaje1 = event; }
    if(name === 'porcentaje2') { this.porcentaje2 = event; }
    
  }
}
