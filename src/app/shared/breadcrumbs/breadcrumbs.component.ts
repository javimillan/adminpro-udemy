import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators'; // operadores que se conectan al observable o se concatenan entre si
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {

  titulo:string;
  tituloSubs$: Subscription;

  constructor(
    private _router: Router
  ) {
    this.tituloSubs$ = this.getArgumentosRuta().subscribe(data => {
          this.titulo = data.titulo;
          document.title = `Admin Pro - ${this.titulo}`;
        });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    console.info("tituloSubs unsubscribed!")
    this.tituloSubs$.unsubscribe();
  }



  getArgumentosRuta(){
    console.log(this._router.events)
    return this._router.events.pipe(
      filter(event => event instanceof ActivationEnd),
      filter(event => event.snapshot.firstChild === null),
      map(event => event.snapshot.data)
    );
  }

}
