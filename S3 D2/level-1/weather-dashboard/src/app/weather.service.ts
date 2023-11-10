// weather.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {
  private apiKey = 'd0d09f25e6ee78a7d8ee9aabc69a14cb';
  private baseUrl = 'https://api.openweathermap.org/data/2.5';
  constructor(private http: HttpClient) { }
  getWeather(cityName: string, unit:string) {
    const url = `${this.baseUrl}/weather?q=${cityName}&appid=${this.apiKey}&units=${unit}`;
    return this.http.get(url);
  }
}
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = 'd0d09f25e6ee78a7d8ee9aabc69a14cb'; // Replace with your OpenWeatherMap API key
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) { }

  getWeatherData(location: string): Observable<any> {
    const params = {
      q: location,
      appid: this.apiKey,
      units: 'metric',
    };

    return this.http.get(this.apiUrl, { params });
  }
}