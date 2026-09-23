import { Observable } from 'rxjs';

export interface IStorageService {
  get(key: string): Promise<string | null>;
  set(key: string, value: string): Promise<void>;
  remove(key: string): Promise<void>;
  clear(): Promise<void>;
  keys(): Promise<string[]>;
  values(): Promise<string[]>;
  entries(): Promise<[string, string][]>;
  isAvailable(): Observable<boolean>;
}