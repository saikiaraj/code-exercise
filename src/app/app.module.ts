import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from './weather.service';
import { TemperatureComponent } from './temperature/temperature.component';
import { WeatherComponent } from './weather/weather.component';
import { DegreePipe } from './degree.pipe';
import { WeatherforecastComponent } from './weatherforecast/weatherforecast.component';

@NgModule({
  declarations: [
    AppComponent,
    TemperatureComponent,
    WeatherComponent,
    DegreePipe,
    WeatherforecastComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ WeatherService, DegreePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
