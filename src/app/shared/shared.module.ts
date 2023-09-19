import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule, MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule, MatListModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AreaComponent } from './widgets/area/area.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { CardComponent } from './widgets/card/card.component';
import { PieComponent } from './widgets/pie/pie.component';
import { MultiBarChartComponent } from './widgets/multi-bar-chart/multi-bar-chart.component';
import { LineChartComponent } from './widgets/line-chart/line-chart.component';
import { AreaChartComponent } from './widgets/area-chart/area-chart.component';
import { PieTwoComponent } from './widgets/pie-two/pie-two.component';
import { PieOneComponent } from './widgets/pie-one/pie-one.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent,
    CardComponent,
    PieComponent,
    MultiBarChartComponent,
    LineChartComponent,
    AreaChartComponent,
    PieTwoComponent,
    PieOneComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    HighchartsChartModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent,
    CardComponent,
    PieComponent,
    MultiBarChartComponent,
    LineChartComponent,
    AreaChartComponent,
    PieTwoComponent,
    PieOneComponent
  ]
})
export class SharedModule { }
