import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-pie-two',
  templateUrl: './pie-two.component.html',
  styleUrls: ['./pie-two.component.scss']
})
export class PieTwoComponent implements OnInit {

  Highcharts = Highcharts;
  chartOptions = {};

  @Input() data = [];

  constructor() { }

  ngOnInit() {
    this.chartOptions = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Risk Accepted By Fincrime Area'
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
      exporting: {
        enabled: true
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Brands',
        colorByPoint: true,
        data: this.data
      }]
    };

    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

}
