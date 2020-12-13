import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { take, map, filter } from 'rxjs/operators'; // operadores que se conectan al observable o se concatenan entre si

@Injectable({
  providedIn: 'root'
})
export class RxjsService {

  constructor() { }


  retornaIntervalo(){
    const intervalo$ = interval(500)
                        .pipe( // tuberia donde añadimos los operadores en cadena
                          take(50), // nº de reintentos
                          map(valor => {
                            return valor + 1; // sunamos 1 para no empezar con 0
                          }),
                          filter(valor => (valor % 2 === 0) ? true : false), // filtramos solo los números pares
                        );

    return intervalo$;
  }

  // retornaObservable(){
  //   let i = -1; // Definimos contador
  //   // Creamos Observable (nomenclatura con $ para saber que es un observable)
  //   const obs$ = new Observable<number>(observer => {
  //     const intervalo = setInterval(() => {
  //       i++; // Sumamos 1 al contador
  //       observer.next(i); // Emitimos observer
  //       if(i === 4){
  //         clearInterval(intervalo); // Limpiamos intervalo
  //         observer.complete(); // Cerramos observer
  //       }
  //       if(i === 2){
  //         observer.error("i llego al valor 2"); // Mostramos error y paramos observer
  //       }
  //     }, 1000 )
  //   });
  //   return obs$;
  // }



}
