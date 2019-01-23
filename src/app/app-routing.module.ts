import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherforecastComponent } from './weatherforecast/weatherforecast.component';

const routes: Routes = [
  { path : '', component: WeatherforecastComponent},
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
