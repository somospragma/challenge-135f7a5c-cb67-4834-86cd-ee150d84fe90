import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { enableProdMode } from '@angular/core';
import { INavigationService } from './app/core/abstractions/INavigationService';
import { ICameraService } from './app/core/abstractions/ICameraService';
import { IGeolocationService } from './app/core/abstractions/IGeolocationService';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
 .catch(err => console.error(err));

class AppBootstrap {
  private navigationService: INavigationService;
  private cameraService: ICameraService;
  private geolocationService: IGeolocationService;

  constructor(
    navigationService: INavigationService,
    cameraService: ICameraService,
    geolocationService: IGeolocationService
  ) {
    this.navigationService = navigationService;
    this.cameraService = cameraService;
    this.geolocationService = geolocationService;
  }

  async initializeApp() {
    try {
      await this.cameraService.requestPermission();
      await this.geolocationService.requestPermission();
      this.navigationService.navigateTo(['/home'], {});
    } catch (error) {
      console.error('Error initializing app:', error);
    }
  }
}

const appBootstrap = new AppBootstrap(
  new NavigationService(),
  new CameraService(),
  new GeolocationService()
);

appBootstrap.initializeApp();