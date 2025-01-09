import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StorageService {
  public getItem<T>(key: string, def: T): T {
    try {
      const v = self.localStorage.getItem(key);
      return v ? JSON.parse(v) : def;
    } catch {
      return def;
    }
  }

  public hasItem(key: string): boolean {
    return !!self.localStorage.getItem(key);
  }

  public setItem<T>(key: string, value: T): void {
    self.localStorage.setItem(key, JSON.stringify(value));
  }

  public removeItem(key: string): void {
    return self.localStorage.removeItem(key);
  }

  public clear(): void {
    self.localStorage.clear();
  }
}
