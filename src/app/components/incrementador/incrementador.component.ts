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
  @Output() nuevoValor: EventEmitter<number> = new EventEmitter();



  constructor() {
    // console.log(this.leyenda);

  }

  ngOnInit(): void {
    // console.log(this.leyenda);
  }

  cambiarValor(valor){
    this.porcentaje = this.porcentaje + valor;
    if(this.porcentaje > 100) return this.porcentaje = 100;
    if(this.porcentaje < 0) return this.porcentaje = 0;
    this.nuevoValor.emit(this.porcentaje);
    this.txtProgress.nativeElement.focus();
  }

}
