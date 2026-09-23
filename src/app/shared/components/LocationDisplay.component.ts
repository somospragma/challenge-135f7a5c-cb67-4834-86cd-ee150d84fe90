import { Component, OnInit } from '@angular/core';
import { IGeolocationService } from 'src/app/core/abstractions/IGeolocationService';
import { GeolocationPermissionError } from 'src/app/core/abstractions/IGeolocationService';

@Component({
  selector: 'app-location-display',
  template: `<div>{{ location }}</div>`
})
export class LocationDisplayComponent implements OnInit {
  private geolocationService: IGeolocationService;
  location: string = 'Loading...';

  constructor(geolocationService: IGeolocationService) {
    this.geolocationService = geolocationService;
  }

  ngOnInit(): void {
    this.getCurrentLocation();
  }

  async getCurrentLocation() {
    try {
      const hasPermission = await this.geolocationService.requestPermission();
      if (!hasPermission) {
        throw new GeolocationPermissionError('Permission denied for geolocation access');
      }

      const position = await this.geolocationService.getCurrentPosition();
      this.location = `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`;
    } catch (error) {
      console.error('Error getting location:', error);
      this.location = 'Error getting location';
    }
  }
}