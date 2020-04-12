import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(
    public _ajustes: SettingsService
    ) { }

  ngOnInit(): void {
    this.colocarCheck();
  }

  changeTheme(tema: string, link: any){
    console.log(link)
    this.aplicarCheck(link);
    this._ajustes.aplicarTema(tema);
  }
  
  aplicarCheck(link: any){
    // Cambiar check
    let selectores: any = document.getElementsByClassName('selector');
    console.log(selectores);
    
    for (let item of selectores){
      item.classList.remove('working');
    }

    link.classList.add('working');
  }

  colocarCheck(){
    let selectores: any = document.getElementsByClassName('selector');
    for (let item of selectores){
      if( item.getAttribute('data-theme') === this._ajustes.ajustes.tema ){
        item.classList.add('working');
        break;
      }
    }
  }
}
