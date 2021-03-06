/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';
import { SeoService } from './@core/utils/seo.service';
import { NbMenuService } from '@nebular/theme';
import { NbAuthService } from '@nebular/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  constructor(private analytics: AnalyticsService,
    private menuService: NbMenuService,
    private authService: NbAuthService,
    private router: Router,
    private seoService: SeoService) {
  }

  ngOnInit(): void {
    this.analytics.trackPageViews();
    this.seoService.trackCanonicalChanges();

    this.menuService.onItemClick()
    .subscribe((event) => {
      this.onContecxtItemSelection(event.item.title);
    });
  }

  onContecxtItemSelection(title) {
    console.log(title);
    if(title == "Salir"){
      this.authService.logout('userName');
      localStorage.removeItem("user"); 
      console.log("------- LOGOUT -------");
      this.router.navigate(['auth/login']);
    }
  }
}
