import { Observable } from 'rxjs';

/**
 * Interfaz abstracta para el servicio de cámara que actúa como Adapter.
 * Encapsula el acceso a la cámara del dispositivo (Capacitor Camera Plugin)
 * proporcionando una API consistente y desacoplada de la implementación concreta.
 */
export interface ICameraService {
  /**
   * Solicita permiso para acceder a la cámara del dispositivo.
   * @returns Promise<boolean> que se resuelve con true si el permiso fue concedido.
   */
  requestPermission(): Promise<boolean>;

  /**
   * Toma una foto utilizando la cámara del dispositivo.
   * @param options Opciones de configuración para la captura (calidad, dirección, etc.).
   * @returns Promise<CameraPhoto> con los datos de la foto capturada.
   * @throws CameraPermissionError si el permiso no fue concedido.
   * @throws CameraUnavailableError si la cámara no está disponible.
   */
  takePhoto(options?: CameraOptions): Promise<CameraPhoto>;

  /**
   * Obtiene fotos de la galería del dispositivo.
   * @param options Opciones de configuración para la selección.
   * @returns Promise<CameraPhoto[]> con las fotos seleccionadas.
   * @throws GalleryPermissionError si el permiso no fue concedido.
   */
  pickFromGallery(options?: GalleryOptions): Promise<CameraPhoto[]>;

  /**
   * Observa el estado de disponibilidad de la cámara.
   * @returns Observable<boolean> que emite true cuando la cámara está disponible.
   */
  cameraAvailability(): Observable<boolean>;

  /**
   * Limpia la caché de fotos temporales generadas por el servicio.
   * @returns Promise<void> que se resuelve cuando la limpieza se completa.
   */
  cleanupTemporaryPhotos(): Promise<void>;
}

/**
 * Opciones de configuración para la captura de fotos.
 */
export interface CameraOptions {
  quality?: number;
  allowEditing?: boolean;
  resultType?: 'base64' | 'uri' | 'dataUrl';
  saveToGallery?: boolean;
  direction?: 'front' | 'rear';
  width?: number;
  height?: number;
}

/**
 * Opciones de configuración para la selección desde la galería.
 */
export interface GalleryOptions {
  maximumImagesCount?: number;
  quality?: number;
}

/**
 * Estructura que representa una foto capturada o seleccionada.
 */
export interface CameraPhoto {
  /**
   * Base64 de la imagen si resultType es 'base64' o 'dataUrl'.
   */
  base64Data?: string;

  /**
   * URI de la imagen si resultType es 'uri'.
   */
  webPath?: string;

  /**
   * Path del archivo en el sistema de archivos del dispositivo.
   */
  path?: string;

  /**
   * Formato de la imagen (jpeg, png).
   */
  format: string;

  /**
   * Exif data si está disponible.
   */
  exif?: any;
}

/**
 * Error lanzado cuando no se concede permiso para acceder a la cámara.
 */
export class CameraPermissionError extends Error {
  constructor(message: string = 'Permission denied for camera access') {
    super(message);
    this.name = 'CameraPermissionError';
  }
}

/**
 * Error lanzado cuando la cámara no está disponible.
 */
export class CameraUnavailableError extends Error {
  constructor(message: string = 'Camera is not available') {
    super(message);
    this.name = 'CameraUnavailableError';
  }
}

/**
 * Error lanzado cuando no se concede permiso para acceder a la galería.
 */
export class GalleryPermissionError extends Error {
  constructor(message: string = 'Permission denied for gallery access') {
    super(message);
    this.name = 'GalleryPermissionError';
  }
}