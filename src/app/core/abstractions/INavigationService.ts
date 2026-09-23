import { Type } from '@angular/core';
import { Observable } from 'rxjs';

/**
 * Interfaz abstracta para el servicio de navegación que actúa como Mediator.
 * Desacopla los componentes de Angular de la implementación concreta de navegación,
 * permitiendo transiciones entre rutas sin depender directamente de Angular Router.
 */
export interface INavigationService {
  /**
   * Navega a la ruta especificada con los parámetros proporcionados.
   * @param route Ruta de destino como array de segmentos (ej: ['/auth', 'login']).
   * @param params Parámetros opcionales para la ruta (query params o state).
   * @returns Promise<void> que se resuelve cuando la navegación se completa.
   */
  navigateTo(route: string[], params?: { [key: string]: any }): Promise<void>;

  /**
   * Navega hacia atrás en el historial de navegación.
   * @param defaultRoute Ruta por defecto si no hay historial (ej: ['/home']).
   * @returns Promise<void> que se resuelve cuando la navegación se completa.
   */
  navigateBack(defaultRoute: string[]): Promise<void>;

  /**
   * Obtiene la ruta actual como un Observable.
   * @returns Observable<string[]> que emite la ruta actual cada vez que cambia.
   */
  currentRoute(): Observable<string[]>;

  /**
   * Registra un componente para ser notificado cuando ocurra una navegación.
   * @param component Componente que implementa la interfaz INavigationAware.
   */
  registerNavigationAware(component: INavigationAware): void;

  /**
   * Elimina el registro de un componente para no recibir más notificaciones.
   * @param component Componente registrado previamente.
   */
  unregisterNavigationAware(component: INavigationAware): void;
}

/**
 * Interfaz que deben implementar los componentes que deseen ser notificados sobre eventos de navegación.
 */
export interface INavigationAware {
  /**
   * Método llamado cuando la navegación hacia una nueva ruta está a punto de ocurrir.
   * @param route Ruta de destino.
   */
  onNavigationStart(route: string[]): void;

  /**
   * Método llamado cuando la navegación se completa exitosamente.
   * @param route Ruta de destino.
   */
  onNavigationSuccess(route: string[]): void;

  /**
   * Método llamado cuando la navegación falla.
   * @param route Ruta que se intentó alcanzar.
   * @param error Error que causó el fallo.
   */
  onNavigationError(route: string[], error: Error): void;
}