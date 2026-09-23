import { Injectable } from '@angular/core';
import { INavigationService } from 'src/app/core/abstractions/INavigationService';
import { INavigationAware } from 'src/app/core/abstractions/INavigationAware';
import { NavigationExtras } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppNavigator implements INavigationService {
  private navigationAwareComponents: INavigationAware[] = [];

  constructor() {}

  navigateTo(route: string[], params?: NavigationExtras): void {
    // Implement navigation logic here
    this.notifyNavigationAware('start', route);
    // Simulate navigation
    this.notifyNavigationAware('success', route);
  }

  navigateBack(defaultRoute: string[]): Promise<void> {
    return new Promise((resolve) => {
      // Implement back navigation logic here
      this.notifyNavigationAware('start', defaultRoute);
      // Simulate navigation
      this.notifyNavigationAware('success', defaultRoute);
      resolve();
    });
  }

  currentRoute(): Observable<string[]> {
    // Implement current route logic here
    return new Observable<string[]>(observer => {
      // Simulate current route
      observer.next(['/home']);
      observer.complete();
    });
  }

  registerNavigationAware(component: INavigationAware): void {
    this.navigationAwareComponents.push(component);
  }

  unregisterNavigationAware(component: INavigationAware): void {
    const index = this.navigationAwareComponents.indexOf(component);
    if (index > -1) {
      this.navigationAwareComponents.splice(index, 1);
    }
  }

  private notifyNavigationAware(event: 'start' | 'success' | 'error', route: string[]): void {
    this.navigationAwareComponents.forEach(component => {
      if (event === 'start') {
        component.onNavigationStart(route);
      } else if (event === 'success') {
        component.onNavigationSuccess(route);
      } else if (event === 'error') {
        component.onNavigationError(route, new Error('Navigation error'));
      }
    });
  }
}