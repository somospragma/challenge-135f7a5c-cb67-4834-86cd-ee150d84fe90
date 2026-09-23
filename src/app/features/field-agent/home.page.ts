import { Component } from '@angular/core';
import { INavigationService } from 'src/app/core/abstractions/INavigationService';
import { ICameraService } from 'src/app/core/abstractions/ICameraService';
import { IGeolocationService } from 'src/app/core/abstractions/IGeolocationService';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage {
  constructor(
    private navigationService: INavigationService,
    private cameraService: ICameraService,
    private geolocationService: IGeolocationService
  ) {}

  navigateToDetails() {
    this.navigationService.navigateTo(['details']).subscribe();
  }

  takePhoto() {
    this.cameraService.requestPermission().then((granted) => {
      if (granted) {
        this.cameraService.takePhoto().then((photo) => {
          console.log('Photo taken:', photo);
        }).catch((error) => {
          console.error('Error taking photo:', error);
        });
      } else {
        console.error('Camera permission denied');
      }
    });
  }

  getLocation() {
    this.geolocationService.requestPermission().then((status) => {
      if (status === 'granted') {
        this.geolocationService.getCurrentPosition().then((position) => {
          console.log('Current position:', position);
        }).catch((error) => {
          console.error('Error getting location:', error);
        });
      } else {
        console.error('Geolocation permission denied');
      }
    });
  }
}