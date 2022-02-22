import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {


  @Input('titulo') title = 'sin-titulo';

  // Doughnut
  @Input() data = [350, 450, 100];  
  @Input('labels') doughnutChartLabels: string[] = ['data1','data2','data3'];
   public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: this.data,
        backgroundColor:['#070000','#ff9c4a','#dbd0d0'] },
      
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';
  
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(){
    this.doughnutChartData = {
      labels: this.doughnutChartLabels,
      datasets: [{
         data: this.data ,
      backgroundColor:['#070000','#ff9c4a','#dbd0d0'] },
      ]
  } }

}
