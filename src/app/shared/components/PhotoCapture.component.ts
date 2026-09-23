import { Component, OnInit } from '@angular/core';
import { ICameraService } from 'src/app/core/abstractions/ICameraService';
import { CameraPermissionError } from 'src/app/core/abstractions/ICameraService';

@Component({
  selector: 'app-photo-capture',
  template: `<div><button (click)="takePhoto()">Take Photo</button></div>`
})
export class PhotoCaptureComponent implements OnInit {
  private cameraService: ICameraService;

  constructor(cameraService: ICameraService) {
    this.cameraService = cameraService;
  }

  ngOnInit(): void {
    // Initialization logic here
  }

  async takePhoto() {
    try {
      const hasPermission = await this.cameraService.requestPermission();
      if (!hasPermission) {
        throw new CameraPermissionError('Permission denied for camera access');
      }

      const photo = await this.cameraService.takePhoto();
      console.log('Photo taken:', photo);
    } catch (error) {
      console.error('Error taking photo:', error);
    }
  }
}