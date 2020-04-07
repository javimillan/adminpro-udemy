import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress: ElementRef; // selector del elemento input
  @Input() porcentaje: number = 50;
  @Input() leyenda: string = 'Legend';

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() { 
    // console.log(this.leyenda);

  }

  ngOnInit(): void {
    // console.log(this.leyenda);
  }

  cambiarValor(valor){
    this.porcentaje = this.porcentaje + valor;
    this.cambioValor.emit(this.porcentaje);
    this.txtProgress.nativeElement.focus();
  }

  inputChanged(event){
    console.log(this.txtProgress);
    if(event > 100){this.porcentaje = 100;}
    else if(event < 0){this.porcentaje = 0;}
    else{this.cambioValor.emit(this.porcentaje); }
    this.txtProgress.nativeElement.value = this.porcentaje;
  }
}
