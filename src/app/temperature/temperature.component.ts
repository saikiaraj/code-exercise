import { Component, OnInit, Input } from '@angular/core';
import { Temperature } from '../temperature';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.scss']
})
export class TemperatureComponent implements OnInit {
  @Input() temperature: Temperature;
  
  constructor() { }

  ngOnInit() {
  }

}
