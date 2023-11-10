// weather-dashboard.component.ts
import { Component, OnInit, OnDestroy, DoCheck, AfterViewInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-dashboard',
  templateUrl: './weather-dashboard.component.html',
  styleUrls: ['./weather-dashboard.component.css']
})
export class WeatherDashboardComponent implements OnInit, OnDestroy, DoCheck, AfterViewInit {
  weatherData: any;
  defaultLocation: string = 'KOlkata'; // Set a valid default location
  updateInterval: number = 300000;
  selectedTemperatureUnit: string = 'Celsius';

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.fetchWeatherData(this.defaultLocation);
  }

  ngDoCheck() {
    // Implement change detection logic here if needed
  }

  ngAfterViewInit() {
    // Perform additional setup after the view has been initialized
  }

  ngOnDestroy() {
    // Clean up resources if needed
  }

  fetchWeatherData(location: string) {
    this.weatherService.getWeatherData(location)
      .subscribe(data => {
        this.weatherData = data;
      }, error => {
        console.error('Error fetching weather data:', error);
        // Add more detailed error handling if needed
        if (error.status === 404) {
          console.error('Location not found. Please enter a valid location.');
        } else {
          console.error('An error occurred while fetching weather data.');
        }
      });
  }

  onLocationChange(event: Event) {
    const newLocation = (event.target as HTMLInputElement)?.value;
    if (newLocation) {
      this.fetchWeatherData(newLocation);
    }
  }

  onTemperatureUnitChange(unit: string) {
    // Handle temperature unit change if needed
  }
  // weather-dashboard.component.ts
formatUnixTimestamp(timestamp: number): Date {
  return new Date(timestamp * 1000);
}


  onIntervalChange(event: Event) {
    const newInterval = (event.target as HTMLSelectElement)?.value;
    if (newInterval) {
      // Handle custom data update interval if needed
      this.updateInterval = +newInterval; // Convert to number
    }
  }
}
