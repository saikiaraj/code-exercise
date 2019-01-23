import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { WeatherforecastComponent } from './weatherforecast.component';
import { TemperatureComponent } from '../temperature/temperature.component';
import { WeatherComponent } from '../weather/weather.component';
import { DegreePipe } from '../degree.pipe';
import { WeatherService } from '../weather.service';
import { Observable, of } from 'rxjs';
import { Weather } from '../weather';
import { Temperature } from '../temperature';
import { List } from '../list';

describe('WeatherforecastComponent', () => {
  let component: WeatherforecastComponent;
  let fixture: ComponentFixture<WeatherforecastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        WeatherforecastComponent,
        TemperatureComponent,
        WeatherComponent,
        DegreePipe
      ],
      providers: [WeatherService, HttpClient, HttpHandler]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherforecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should load weather forecast', () => {
    const Weatherforecast = {
      "cod":"200",
      "message":0.0146,
      "cnt":37,
      "list" : [
        {
        "dt" : 1547974800,
         "main":{  
            "temp":273.77,
            "temp_min":269.847,
            "temp_max":273.77,
            "pressure":1021.86,
            "sea_level":1029.84,
            "grnd_level":1021.86,
            "humidity":92,
            "temp_kf":3.93
         },
         "weather":[  
            {  
               "id":800,
               "main":"Clear",
               "description":"clear sky",
               "icon":"01d"
            }
         ],
         "clouds":{  
            "all":0
         },
         "wind":{  
            "speed":3.07,
            "deg":29.0006
         },
         "rain":{  

         },
         "sys":{  
            "pod":"d"
         },
         "dt_txt":"2019-01-20 09:00:00"
      }
      ]
    }
    let response;
    let temp : Temperature[] = [];
    let weather : Weather[] = [];
    spyOn(component.weatherService, 'getWeatherforecastData').and.returnValue(of(Weatherforecast));
    component.weatherService.getWeatherforecastData().subscribe(res => {
      res.list.map( (response : List)  => {
        temp.push(response.main);
        weather.push(response.weather[0]);
      })
    });
    component.ngOnInit();
    expect(component.weatherService.getWeatherforecastData).toHaveBeenCalled();
  });
});
