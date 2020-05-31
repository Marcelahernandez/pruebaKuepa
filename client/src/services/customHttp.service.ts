import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UtilsService } from './utils.service';
import { NgxSpinnerService } from "ngx-spinner";
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';
        
@Injectable()

export class CustomHttpService {
	public socket:any;

	constructor(
		private http: HttpClient,
		private spinner: NgxSpinnerService,
		private utilsService: UtilsService,
	) {
		this.socket = io(this.utilsService.getUrl());
	}


	private getHeaderBaseJson(): HttpHeaders {
		const self = this;
		let token = JSON.parse(localStorage.getItem('auth_app_token'));
		const headerBaseJson = new HttpHeaders()
			.set('Authorization', 'Bearer ' + token.value)
			.set('Content-Type', 'application/json');
		return headerBaseJson;
	}

	private getHeaderBaseFormData(): HttpHeaders {
		const self = this;
		let token = JSON.parse(localStorage.getItem('auth_app_token'));
		const headerBaseFormData = new HttpHeaders()
			.set('Authorization', 'Bearer ' + token.value);
		return headerBaseFormData;
	}


	/**
	 * Metodos de conexion con el API (GET, POST, PUT, GET-DATA)
	 */
	// Metodo GET
	


	httpGET (path, params = null): Promise<any> {
		this.spinner.show();
		return new Promise(
			resolve => {
				// Make the HTTP request:
				this.http.get(this.utilsService.getUrl() + path, {
					headers: this.getHeaderBaseJson(),
					params: params
				}).subscribe(
					// Successful responses call the first callback.
					data => {
						if (data != null && data.hasOwnProperty('error')) {
							this.utilsService.showError(data['error']);
							resolve(false);
							this.spinner.hide();
						} else {
							if (data.hasOwnProperty('msg')) {
								this.utilsService.showError(data["msg"]); 
							}
							resolve(data);
							this.spinner.hide();
						}
					},
					// Errors will call this callback instead:
					err => {
						if(err.error.title){
							this.utilsService.showError(err.error.title); 
						}
						if(err.error.msg){
							this.utilsService.showError(err.error.msg); 
						}
						resolve(false);
						this.spinner.hide();
					}
				);
			}
		);
	}

	// Metodo POST
	httpPOST (path, params = null, formData = null): Promise<any> {
		this.spinner.show();
		return new Promise(
			resolve => {
				let varHeader = this.getHeaderBaseJson();
				let varData = params;
				if (formData !== null) {
					varHeader = this.getHeaderBaseFormData();
					varData = formData;
				}
				// Make the HTTP request:
				this.http.post(
					this.utilsService.getUrl() + path,
					varData,
					{ headers: varHeader }
				).subscribe(
					// Successful responses call the first callback.
					data => {
						if (data != null && data.hasOwnProperty('error')) {
							this.utilsService.showError(data["error"]); 
							resolve(false);
							this.spinner.hide();
						} else {
							if (data.hasOwnProperty('msg')) {
								this.utilsService.showSuccess(data["msg"]); 
							}
							resolve(data);
							this.spinner.hide();
						}
					},
					// Errors will call this callback instead:
					err => {
						if(err.error.title){
							this.utilsService.showError(err.error.title); 
						}
						if(err.error.msg){
							this.utilsService.showError(err.error.msg); 
						}
						resolve(false);
						this.spinner.hide();
					}
				);
			}
		);
	}

	// Metodo PUT
	httpPUT (path, params = null, formData = null): Promise<any> {
		this.spinner.show();
		return new Promise(
			resolve => {
				let varHeader = this.getHeaderBaseJson();
				let varData = params;
				if (formData !== null) {
					varHeader = this.getHeaderBaseFormData();
					varData = formData;
				}
				// Make the HTTP request:
				this.http.put(
					this.utilsService.getUrl() + path,
					varData,
					{ headers: varHeader }
				).subscribe(
					// Successful responses call the first callback.
					data => {
						if (data != null && data.hasOwnProperty('errors')) {
							this.utilsService.showError(data['title']);
							resolve(false);
							this.spinner.hide();
						} else {
							if (data.hasOwnProperty('msg')) {
								this.utilsService.showSuccess(data["msg"]); 
							}
							resolve(data);
							this.spinner.hide();
						}
					},
					// Errors will call this callback instead:
					err => {
						if(err.error.title){
							this.utilsService.showError(err.error.title); 
						}
						if(err.error.msg){
							this.utilsService.showError(err.error.msg); 
						}
						resolve(false);
						this.spinner.hide();
					}
				);
			}
		);
	}


	httpDELETE(path): Promise<any> {
		this.spinner.show();
		return new Promise(
			resolve => {
				// Make the HTTP request:
				this.http.delete(this.utilsService.getUrl() + path, {
					headers: this.getHeaderBaseJson(),
				}).subscribe(
					// Successful responses call the first callback.
					data => {
						if (data != null && data.hasOwnProperty('errorCode')) {
							this.utilsService.showError(data['error']);
							resolve(false);
							this.spinner.hide();
						} else {
							if (data.hasOwnProperty('msg')) {
								this.utilsService.showSuccess(data["msg"]); 
							}
							resolve(data);
							this.spinner.hide();
						}
					},
					// Errors will call this callback instead:
					err => {
						if(err.error.title){
							this.utilsService.showError(err.error.title); 
						}
						if(err.error.msg){
							this.utilsService.showError(err.error.msg); 
						}
						resolve(false);
						this.spinner.hide();
					}
				);
			}
		);
	}

	 
    listen(eventName: String){
        return new Observable((Subscriber) =>{
            this.socket.on(eventName, (data) => {
				Subscriber.next(data);
			})
        })
	}
	
	emit(eventName: String, data: any){
		this.socket.emit(eventName, data);
	}

	/**
	 * Fin Metodos de conexion con el API (GET, POST, PUT, GET-DATA)
	 */
}