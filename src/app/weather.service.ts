import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Weatherforecast } from './weatherforecast';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(public _http: HttpClient) { }

  getWeatherforecastData() : Observable<Weatherforecast> {
    let path = 'http://api.openweathermap.org/data/2.5/forecast?id=2643743&appid=416f21735638892910fc788dbd92dc24';
    return this._http.get<Weatherforecast>(path);
  }
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
