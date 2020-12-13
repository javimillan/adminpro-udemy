import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { retry } from 'rxjs/operators'; // operadores que se conectan al observable o se concatenan entre si
import { RxjsService } from '../../services/service.index';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit, OnDestroy {

  intervalSubs: Subscription; // para poder hacer unsubscribe

  constructor(
    public _rxjs : RxjsService
  ) {

    // Consumimos observable del servicio (pipe es un operador para transformar la data que viene en el Observable, en este caso con retry hacemos reintentos)
    // this._rxjs.retornaObservable().pipe(
    //   retry(5)
    // )
    // .subscribe(
    //   valor => console.log("Subs:", valor),
    //   error => console.warn("Error:", error),
    //   () => console.info("Obs terminado!")
    // );

    this.intervalSubs = this._rxjs.retornaIntervalo()
    //.subscribe(console.log) // metodo abreviado
    .subscribe(valor => console.log(valor)
    )


  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    console.info("intervalSubs unsubscribed!")
    this.intervalSubs.unsubscribe(); // Se ejecuta automáticamente cuando cambias de componente o vista para evitar problema de colapso en la memoria RAM
  }

}
