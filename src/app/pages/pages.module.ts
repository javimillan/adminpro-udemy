import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';

// Routes
import { PAGES_ROUTES } from './pages.routes';

// Modules
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficaComponent } from '../components/grafica/grafica.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';


@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    IncrementadorComponent,
    GraficaComponent,
    AccountSettingsComponent
  ],
  imports: [
    PAGES_ROUTES,
    SharedModule,
    FormsModule,
    ChartsModule,
    CommonModule
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
  ],
  providers: [],
  bootstrap: []
})
export class PagesModule { }
