import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// modulos terceros



import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { ProgressComponent } from './progress/progress.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';
import { DonaComponent } from '../components/dona/dona.component';




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
    DonaComponent,
    PagesComponent

  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    ComponentsModule,
    
    

    
  ]
})
export class PagesModule { }
