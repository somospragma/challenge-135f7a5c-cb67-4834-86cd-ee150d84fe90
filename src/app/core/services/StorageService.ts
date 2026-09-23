import { Injectable } from '@angular/core';
import { IStorageService } from '../abstractions/IStorageService';
import { Storage } from '@capacitor/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService implements IStorageService {
  constructor() {}

  async set(key: string, value: string): Promise<void> {
    try {
      await Storage.set({ key, value });
    } catch (error) {
      console.error('Error setting value in storage', error);
      throw error;
    }
  }

  async get(key: string): Promise<string | null> {
    try {
      const { value } = await Storage.get({ key });
      return value;
    } catch (error) {
      console.error('Error getting value from storage', error);
      throw error;
    }
  }

  async remove(key: string): Promise<void> {
    try {
      await Storage.remove({ key });
    } catch (error) {
      console.error('Error removing value from storage', error);
      throw error;
    }
  }

  async clear(): Promise<void> {
    try {
      await Storage.clear();
    } catch (error) {
      console.error('Error clearing storage', error);
      throw error;
    }
  }
}