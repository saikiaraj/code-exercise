import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherService } from './weather.service';
import { DegreePipe } from './degree.pipe';
import { HttpClientModule, HttpClient, HttpHandler } from '@angular/common/http';
import { WeatherforecastComponent } from './weatherforecast/weatherforecast.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        WeatherforecastComponent,
        TemperatureComponent,
        WeatherComponent,
        DegreePipe
      ],
      providers : [
        DegreePipe,
        HttpClientModule,
        HttpClient,
        HttpHandler
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'code-exercise'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('code-exercise');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to code-exercise!');
  });
});
