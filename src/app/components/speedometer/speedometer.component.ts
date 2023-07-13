import { Component } from '@angular/core';

@Component({
  selector: 'app-speedometer',
  templateUrl: './speedometer.component.html',
  styleUrls: ['./speedometer.component.scss']
})
export class SpeedometerComponent {
  public canvasWidth = 300
  public needleValue = 65
  public centralLabel = ''
  public name = 'Gauge chart'
  public bottomLabel = '65'
  public options = {
      hasNeedle: true,
      needleColor: 'gray',
      needleUpdateSpeed: 1000,
      arcColors: ['rgb(44, 151, 222)', 'lightgray'],
      arcDelimiters: [30],
      rangeLabel: ['0', '100'],
      needleStartValue: 50,
  }
}
