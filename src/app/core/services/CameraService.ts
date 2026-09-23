import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { ICameraService } from '../abstractions/ICameraService';
import { CameraOptions, GalleryOptions, CameraPhoto } from '../abstractions/ICameraService';
import { CameraPermissionError, CameraUnavailableError, GalleryPermissionError } from '../abstractions/ICameraService';

const { Camera } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class CameraService implements ICameraService {
  async requestPermission(): Promise<boolean> {
    try {
      const status = await Camera.checkPermissions();
      if (status.camera === 'denied') {
        throw new CameraPermissionError();
      }
      return status.camera === 'granted';
    } catch (error) {
      throw new CameraPermissionError(error.message);
    }
  }

  async takePhoto(options?: CameraOptions): Promise<CameraPhoto> {
    try {
      const result = await Camera.getPhoto(options);
      return {
        base64: result.base64,
        webPath: result.webPath,
        width: result.width,
        height: result.height
      };
    } catch (error) {
      throw new CameraUnavailableError(error.message);
    }
  }

  async pickFromGallery(options?: GalleryOptions): Promise<CameraPhoto[]> {
    try {
      const result = await Camera.pickPhotos(options);
      return result.photos.map(photo => ({
        base64: photo.base64,
        webPath: photo.webPath,
        width: photo.width,
        height: photo.height
      }));
    } catch (error) {
      throw new GalleryPermissionError(error.message);
    }
  }

  cameraAvailability(): Observable<boolean> {
    return new Observable(observer => {
      Camera.addListener('cameraStatusChange', status => {
        observer.next(status.available);
      });
    });
  }

  async cleanupTemporaryPhotos(): Promise<void> {
    // Implement cleanup logic here
  }
}