import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { NgChartsModule } from 'ng2-charts';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './components/doughnut-chart/doughnut-chart.component';
import { RadarChartComponent } from './components/radar-chart/radar-chart.component';
import { PolarChartComponent } from './components/polar-chart/polar-chart.component';
import { BubbleChartComponent } from './components/bubble-chart/bubble-chart.component';
import { ScatterChartComponent } from './components/scatter-chart/scatter-chart.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { HighChartComponent } from './components/high-chart/high-chart.component';
import { GaugeComponent } from './components/gauge/gauge.component';
import { GaugeModule } from 'angular-gauge';
import { SpeedometerComponent } from './components/speedometer/speedometer.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { GoogleMapComponent } from './components/google-map/google-map.component';
import { AgGridComponent } from './components/ag-grid/ag-grid.component'
import { AgGridModule } from 'ag-grid-angular';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxSpinnerModule } from "ngx-spinner";
import { SpinnerComponent } from './components/spinner/spinner.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { AvatarModule } from 'ngx-avatars';
import { CarouselComponent } from './components/carousel/carousel.component';
import {MatCardModule} from '@angular/material/card';
import { CardComponent } from './components/card/card.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MaterialSpinnerComponent } from './components/material-spinner/material-spinner.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardGraphComponent } from './components/dashboard-graph/dashboard-graph.component';

interface NgxSpinnerConfig {
  type?: string;
}
@NgModule({
  declarations: [
    AppComponent,
    PieChartComponent,
    LineChartComponent,
    BarChartComponent,
    DoughnutChartComponent,
    RadarChartComponent,
    PolarChartComponent,
    BubbleChartComponent,
    ScatterChartComponent,
    HighChartComponent,
    GaugeComponent,
    SpeedometerComponent,
    GoogleMapComponent,
    AgGridComponent,
    SpinnerComponent,
    AvatarComponent,
    CarouselComponent,
    CardComponent,
    MaterialSpinnerComponent,
    NavbarComponent,
    DashboardGraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule,
    HighchartsChartModule,
    GaugeModule.forRoot(),
    GoogleMapsModule,
    AgGridModule,
    FlexLayoutModule ,
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),
    AvatarModule,
    MatCardModule,
    MatProgressSpinnerModule,
    TooltipModule.forRoot()
    ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  
})
export class AppModule { }
