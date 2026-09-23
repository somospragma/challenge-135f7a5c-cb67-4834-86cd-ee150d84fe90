import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { INavigationService } from '../abstractions/INavigationService';
import { INavigationAware } from '../abstractions/INavigationAware';

@Injectable({
  providedIn: 'root'
})
export class NavigationService implements INavigationService {
  private navigationSubject = new Subject<string[]>();
  private navigationAwareComponents: INavigationAware[] = [];

  navigateTo(route: string[], params?: { [key: string]: any }): void {
    // Implement navigation logic here
    this.navigationSubject.next(route);
  }

  navigateBack(defaultRoute: string[]): Promise<void> {
    // Implement navigation back logic here
    return Promise.resolve();
  }

  currentRoute(): Observable<string[]> {
    return this.navigationSubject.asObservable();
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
}