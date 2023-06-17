import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export default class LocalStorageService {
  sync(key: string, data: any) {
    this.set(key, data);
    return data;
  }

  set(key: string, data: any) {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, JSON.stringify(data));
    }
  }

  get<T>(key: string) {
    if (typeof window !== 'undefined') {
      const response = localStorage.getItem(key);
      return response ? JSON.parse(response) : null;
    }
  }

  clear(key: string) {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(key);
    }
  }
}
