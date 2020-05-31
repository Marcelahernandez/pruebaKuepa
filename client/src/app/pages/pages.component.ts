import { Component } from '@angular/core';
import { MENU_ITEMS } from './pages-menu';
import { NbIconLibraries } from '@nebular/theme';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-spinner></ngx-spinner> 
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent {

  menu = MENU_ITEMS;

  constructor(iconsLibrary: NbIconLibraries) {
    iconsLibrary.registerFontPack('ion', { iconClassPrefix: 'ion' });
  }


}
