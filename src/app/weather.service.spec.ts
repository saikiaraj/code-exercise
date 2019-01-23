import { TestBed, async, inject } from '@angular/core/testing';
import { WeatherService } from './weather.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('WeatherService', () => {
  beforeEach(() => {TestBed.configureTestingModule({
    imports: [
      HttpClientModule,
      HttpClientTestingModule
    ]
  })
});
  it('should be created', () => {
    const service: WeatherService = TestBed.get(WeatherService);
    expect(service).toBeTruthy();
  });
});
