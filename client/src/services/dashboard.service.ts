import { Injectable } from '@angular/core';
import { CustomHttpService } from './customHttp.service';
import { BaseServiceService } from './baseService.service';

@Injectable()

export class DashboardService extends BaseServiceService {
	private controller = 'Logsasdasd';

	constructor(
		public customHttpService: CustomHttpService,
	) {
    super(customHttpService);
		this.TAG = this.controller;
		this.varGet = this.controller;
		this.varGetId = 'data';
	}    
}
