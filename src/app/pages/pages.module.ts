import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { ProgressComponent } from './progress/progress.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';




@NgModule({
  declarations: [
    ProgressComponent,
    DashboardComponent,
    Grafica1Component,
    
    PagesComponent
  ],
  exports:[
    ProgressComponent,
    DashboardComponent,
    Grafica1Component,
    
    PagesComponent

  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
    

    
  ]
})
export class PagesModule { }
