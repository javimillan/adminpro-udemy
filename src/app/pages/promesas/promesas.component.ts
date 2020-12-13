import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // Creamos promesa
    const promesa = new Promise((resolve, reject) => {
      if (true){
        resolve("Hola mundo");
      }else{
        reject("Algo salió mal");
      }
    });
    // Nos subscribimos a la promesa
    promesa.then((mensaje) => {
      console.log(mensaje);
    })
    .catch(error => console.log("Error en mi promesa: ", error));
    // END promesa

    // se ejecutará antes de la promesa
    console.log("fin del init!");

    // Consumimos promesa2
    this.getUsuarios().then( usuarios =>
      console.log(usuarios)
    )
  }

  getUsuarios(){
    // Creamos promesa2
     const promesa2 = new Promise((resolve, reject) => {
     	if (true){
        fetch('https://reqres.in/api/users')
        .then(resp => resp.json())
        .then(body => resolve(body.data));
     	}else{
     		reject("Algo salió mal");
     	}
     });
     // Devolvemos promesa
     return promesa2;
  }




}
