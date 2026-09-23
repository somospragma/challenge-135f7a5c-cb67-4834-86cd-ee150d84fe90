import { Injectable } from '@angular/core';
import { IGeolocationService } from '../abstractions/IGeolocationService';
import { Geolocation } from '@capacitor/geolocation';
import { GeolocationPosition, PermissionStatus, GeolocationPermissionError, GeolocationUnavailableError, TimeoutError } from '../abstractions/IGeolocationService';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService implements IGeolocationService {
  private currentPosition$: Observable<GeolocationPosition>;
  private watchId: number;

  constructor() {}

  async requestPermission(): Promise<PermissionStatus> {
    try {
      const { status } = await Geolocation.requestPermission();
      return status as PermissionStatus;
    } catch (error) {
      throw new GeolocationPermissionError();
    }
  }

  async getCurrentPosition(options?: PositionOptions): Promise<GeolocationPosition> {
    try {
      const { coords } = await Geolocation.getCurrentPosition(options);
      return this.mapCoordsToPosition(coords);
    } catch (error) {
      if (error.code === Geolocation.PERMISSION_DENIED) {
        throw new GeolocationPermissionError();
      } else if (error.code === Geolocation.POSITION_UNAVAILABLE) {
        throw new GeolocationUnavailableError();
      } else if (error.code === Geolocation.TIMEOUT) {
        throw new TimeoutError();
      }
      throw error;
    }
  }

  watchPosition(options?: PositionOptions): Observable<GeolocationPosition> {
    this.currentPosition$ = new Observable<GeolocationPosition>(observer => {
      this.watchId = Geolocation.watchPosition(options).subscribe({
        next: position => observer.next(this.mapCoordsToPosition(position.coords)),
        error: error => observer.error(error)
      });
    });
    return this.currentPosition$;
  }

  clearWatch(): void {
    if (this.watchId) {
      Geolocation.clearWatch({ id: this.watchId }).then(() => this.watchId = null);
    }
  }

  async isGpsEnabled(): Promise<boolean> {
    try {
      const { enabled } = await Geolocation.checkPermissions();
      return enabled === 'granted';
    } catch (error) {
      throw new GeolocationPermissionError();
    }
  }

  async checkPermission(): Promise<PermissionStatus> {
    try {
      const { status } = await Geolocation.checkPermissions();
      return status as PermissionStatus;
    } catch (error) {
      throw new GeolocationPermissionError();
    }
  }

  private mapCoordsToPosition(coords: GeolocationCoordinates): GeolocationPosition {
    return {
      timestamp: coords.timestamp,
      coords: {
        latitude: coords.latitude,
        longitude: coords.longitude,
        altitude: coords.altitude,
        accuracy: coords.accuracy,
        altitudeAccuracy: coords.altitudeAccuracy,
        heading: coords.heading,
        speed: coords.speed
      }
    };
  }
}