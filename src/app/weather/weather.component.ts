import { Component, OnInit, Input } from '@angular/core';
import { Weather } from '../weather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  @Input() weather : Weather;
  constructor() { }

  ngOnInit() {
  }

}
