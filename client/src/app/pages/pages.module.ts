import { ChatsComponentService } from './../../services/chats-component.service';
import { DashboardService } from './../../services/dashboard.service';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {AngularDualListBoxModule } from 'angular-dual-listbox';
import { NbMenuModule, NbCardModule, NbButtonModule, NbDatepickerModule, NbIconModule, NbDialogModule, NbAlertModule, NbRadioModule, NbAccordionModule } from '@nebular/theme';
import { NgxSpinnerModule, NgxSpinnerService } from "ngx-spinner";
import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { CustomHttpService } from './../../services/customHttp.service';
import { BaseServiceService } from './../../services/baseService.service';
import { registerLocaleData } from '@angular/common';
import { NgxDropzoneModule } from 'ngx-dropzone';
import localeEn from '@angular/common/locales/en';
import localeEs from '@angular/common/locales/es';


import { UtilsService } from '../../services/utils.service';

import { Ng2SmartTableModule } from 'ng2-smart-table';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonsService } from '../../services/commons.service';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';

import { TimepickerModule } from 'ngx-bootstrap/timepicker';

import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartModule } from 'angular2-chartjs';
import { NgbDateCustomParserFormatter } from '../../services/date-formatter.service';
import { ChatsComponentComponent } from './chats-component/chats-component.component';
import { HomeComponent } from './home/home.component';

registerLocaleData(localeEs, 'es');
registerLocaleData(localeEn, 'en')
 

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    NbButtonModule,
    DashboardModule,
    NbDatepickerModule,
    ECommerceModule,
    MiscellaneousModule,
    NbCardModule,
    Ng2SmartTableModule,
    NgxSpinnerModule,
    NbIconModule,
    FormsModule,
    AngularDualListBoxModule,
    ReactiveFormsModule,
    NbDialogModule.forRoot(),
    NbAlertModule,
    NgxDropzoneModule,
    NbRadioModule,
    TimepickerModule.forRoot(),
    NbAccordionModule,
    NgxEchartsModule,
    NgxChartsModule,
    ChartModule
  ], 
  declarations: [
    PagesComponent,
    ChatsComponentComponent,
    HomeComponent,
    
  ],
  providers: [
    CustomHttpService,
    BaseServiceService,
    UtilsService,
    NgxSpinnerService,
    CommonsService,
    DashboardService,
    ChatsComponentService,
    { provide: NgbDateParserFormatter, useClass: NgbDateCustomParserFormatter }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PagesModule {
}
