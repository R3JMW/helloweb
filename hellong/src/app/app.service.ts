import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private readonly menu: any[] = [];

  constructor() { }

  init(): void {
    this.menu.push({ title: 'Dashboard', id: '0000', description: 'Show Dashboard' });
  }

  public getMenu(): any[] {
    return this.menu;
  };
}
