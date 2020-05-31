import { Injectable} from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
// Declare Vars
declare var $: any;
import {
    NbComponentStatus,
    NbGlobalPhysicalPosition,
    NbToastrService,
  } from '@nebular/theme';

  
@Injectable()
export class UtilsService {
    
    private isDebug = true;
    private loggedIn = false;
    //localhost
    private url = 'http://localhost:3000';
    

    constructor(
        private router: Router,
        private toastrService: NbToastrService,
    ) { 
        
    }
      
    isLoggedIn(): boolean {
        return this.loggedIn;
    }
    setLoggedIn(isLoggedIn: boolean) {
        this.loggedIn = isLoggedIn;
    }

    getUrl(): string {
        return this.url;
    }

    loadScript(url) {
        console.log('preparing to load... ' + url);
        const node = document.createElement('script');
        node.type = 'text/javascript';
        node.src = url;
        document.getElementsByTagName('head')[0].appendChild(node);
    }

    public showError(msg){
        this.makeToast('danger', "Error", msg);
    }

    public showSuccess(msg){
        this.makeToast('success', "Exito", msg);
    }

    makeToast(status, title, content) {
        this.showToast(status, title, content);
    }

    private showToast(type: NbComponentStatus, title: string, body: string) {
        const config = {
          status: type,
          destroyByClick: true,
          duration: 6000,
          hasIcon: false,
          position: NbGlobalPhysicalPosition.TOP_RIGHT,
          preventDuplicates: true,
        };
        const titleContent = title;
    
        this.toastrService.show(
          body,
          titleContent,
          config);
    }
  

}