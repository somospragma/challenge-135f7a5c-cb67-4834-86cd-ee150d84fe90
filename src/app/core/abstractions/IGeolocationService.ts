import { Observable } from 'rxjs';

/**
 * Interfaz abstracta para el servicio de geolocalización que actúa como Adapter.
 * Encapsula el acceso al GPS del dispositivo (Capacitor Geolocation Plugin)
 * proporcionando una API consistente y desacoplada de la implementación concreta.
 */
export interface IGeolocationService {
  /**
   * Solicita permiso para acceder a la ubicación del dispositivo.
   * @returns Promise<PermissionStatus> con el estado del permiso.
   */
  requestPermission(): Promise<PermissionStatus>;

  /**
   * Obtiene la posición actual del dispositivo.
   * @param options Opciones de configuración para la obtención de la posición.
   * @returns Promise<GeolocationPosition> con la posición actual.
   * @throws GeolocationPermissionError si el permiso no fue concedido.
   * @throws GeolocationUnavailableError si el GPS no está disponible.
   * @throws TimeoutError si la operación excede el tiempo de espera.
   */
  getCurrentPosition(options?: PositionOptions): Promise<GeolocationPosition>;

  /**
   * Observa la posición del dispositivo en tiempo real.
   * @param options Opciones de configuración para el watch.
   * @returns Observable<GeolocationPosition> que emite la posición cada vez que cambia.
   */
  watchPosition(options?: PositionOptions): Observable<GeolocationPosition>;

  /**
   * Detiene la observación de la posición.
   */
  clearWatch(): void;

  /**
   * Verifica si el GPS está habilitado en el dispositivo.
   * @returns Promise<boolean> que se resuelve con true si el GPS está habilitado.
   */
  isGpsEnabled(): Promise<boolean>;

  /**
   * Obtiene el estado del permiso de ubicación.
   * @returns Promise<PermissionStatus> con el estado actual del permiso.
   */
  checkPermission(): Promise<PermissionStatus>;
}

/**
 * Opciones de configuración para la obtención de la posición.
 */
export interface PositionOptions {
  enableHighAccuracy?: boolean;
  timeout?: number;
  maximumAge?: number;
}

/**
 * Estructura que representa la posición geográfica del dispositivo.
 */
export interface GeolocationPosition {
  /**
   * Coordenadas de la posición.
   */
  coords: {
    latitude: number;
    longitude: number;
    accuracy: number;
    altitude?: number;
    altitudeAccuracy?: number;
    heading?: number;
    speed?: number;
  };

  /**
   * Timestamp de cuando se obtuvo la posición.
   */
  timestamp: number;
}

/**
 * Tipos de estado de permiso para geolocalización.
 */
export type PermissionStatus = 'prompt' | 'granted' | 'denied';

/**
 * Error lanzado cuando no se concede permiso para acceder a la ubicación.
 */
export class GeolocationPermissionError extends Error {
  constructor(message: string = 'Permission denied for geolocation access') {
    super(message);
    this.name = 'GeolocationPermissionError';
  }
}

/**
 * Error lanzado cuando el GPS no está disponible.
 */
export class GeolocationUnavailableError extends Error {
  constructor(message: string = 'Geolocation is not available') {
    super(message);
    this.name = 'GeolocationUnavailableError';
  }
}

/**
 * Error lanzado cuando la operación excede el tiempo de espera.
 */
export class TimeoutError extends Error {
  constructor(message: string = 'Operation timed out') {
    super(message);
    this.name = 'TimeoutError';
  }
}