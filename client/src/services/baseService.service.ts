import { Observable, Subscriber } from 'rxjs';
import { Injectable } from '@angular/core';
import { CustomHttpService } from './customHttp.service';

@Injectable()
export class BaseServiceService {

    private result: any;
    public TAG = 'Default';
    public varGet = 'list' + this.TAG;
    public varGetId = '';
    public varPut = '';
    public varPost = '';

    constructor(
        public customHttpService: CustomHttpService,
    ) { }

    // FUNCIONES PARA CONSULTA DE TABLA TAG //
    /**
     * Función que trae todos los datos la tabla TAG en la plataforma.
     * @ returns {Promise<T>}
     */
    getResults() {
        const self = this;
        return new Promise(
            resolve => {
                // Get Info from 'v1/api/TAG/'
                self.customHttpService.httpGET ('v1/api/' + self.TAG).then(
                    function (response) {
                        if (response === false) { resolve(response); }
                        self.result = response[self.varGetId];
                        resolve(true);
                    }
                );
            }
        );
    }

    /**
     * Función que trae los datos de un dato de la tabla TAG segun su ID.
     * @ param id
     * @ returns {Promise<T>}
     */
    getResult(id) {
        const self = this;
        return new Promise(
            resolve => {
                // Get Info from 'v1/api/TAG/'
                self.customHttpService.httpGET ('v1/api/' + self.TAG + '/' + id).then(
                    function (response) {
                        if (response === false) { resolve(response); }
                        self.result = response[self.varGetId];
                        resolve(true);
                    }
                );
            }
        );
    }

    // FUNCIONES CREACION Y ACTUALIZACION DE TABLA TAG //
    /**
     * Función que inserta un objeto de tipo TAG en la base de datos
     * @ param request
     * @ param params
     * @ returns {Promise<T>}
     */
    postData(request = null, params = null) {
        const self = this;
        return new Promise(
            resolve => {
                // POST from 'v1/api/TAG/'
                self.customHttpService.httpPOST('v1/api/' + self.TAG , request, params).then(
                    function (response) {
                        if (response === false) { resolve(response); }
                        self.result = response['data'];
                        resolve(true);
                    }
                );
            }
        );
    }

    /**
     * Función que actualiza un objeto de tipo TAG en la base de datos
     * @ param id
     * @ param request
     * @ param params
     * @ returns {Promise<T>}
     */
    putData(id, request = null, params = null) {
        const self = this;
        return new Promise(
            resolve => {
                // POST from 'v1/api/TAG/id'
                this.customHttpService.httpPUT('v1/api/' + self.TAG + '/' + id, request, params).then(
                    function (response) {
                        if (response === false) { resolve(response); }
                        resolve(true);
                    }
                );
            }
        );
    }

    // Getters and Setter Variables
    getVarResults () { return this.result; }
    public setVarResults (resultVar): void { this.result = resultVar; }

    saveChat(data, params = null){
        const self = this;
        return new Promise(
            resolve => {
                // POST from 'v1/api/TAG/'
                self.customHttpService.httpPOST('/'+self.TAG +'/registerChat' , data, params).then(
                    function (response) {
                        if (response === false) { resolve(response); }
                        self.result = response;
                        resolve(true);
                    }
                );
            }
        );
    }

    emit(eventName, data){
        this.customHttpService.emit(eventName, data);
    }
    
}

