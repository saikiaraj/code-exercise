import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Weather } from '../weather';
import { Temperature } from '../temperature';
import { List } from '../list';
import { Weatherforecast } from '../weatherforecast';

@Component({
  selector: 'app-weatherforecast',
  templateUrl: './weatherforecast.component.html',
  styleUrls: ['./weatherforecast.component.scss']
})
export class WeatherforecastComponent implements OnInit {
  temp : Temperature[] = [];
  weather : Weather[] = [];
  constructor(public weatherService : WeatherService) { }

  ngOnInit() {
    this.weatherService.getWeatherforecastData().subscribe((response : Weatherforecast) => {
      response.list.map( (response : List)  => {
        this.temp.push(response.main);
        this.weather.push(response.weather[0]);
      })
    },
    err => console.error('Observer got an error: ' + err),
    () => console.log('Observer got a complete notification')
  )}
}
