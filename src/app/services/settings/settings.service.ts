import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/defaults.css',
    tema: 'default'
  }
  constructor() { 
    this.cargarAjustes();
  }
  
    guardarAjustes(){
     localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
    }
    
    cargarAjustes(){
      if ( localStorage.getItem('ajustes') ) {
        this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
        this.aplicarTema(this.ajustes.tema);
      }
    }

    aplicarTema(tema: string){
      let selectedUrl = `assets/css/colors/${tema}.css`;
      document.getElementById('theme').setAttribute('href', selectedUrl);
      this.ajustes.tema = tema;
      this.ajustes.temaUrl = selectedUrl;
      this.guardarAjustes();
    }

    

}
interface Ajustes{
  temaUrl: string;
  tema: string;
}