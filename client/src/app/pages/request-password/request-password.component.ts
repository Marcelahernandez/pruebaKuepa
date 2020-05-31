import { NbAuthResult, NbAuthService, NB_AUTH_OPTIONS, getDeepFromObject } from '@nebular/auth';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nb-request-password-page',
  styleUrls: ['./request-password.component.scss'],
  templateUrl: './request-password.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NbRequestPasswordComponent {

  redirectDelay: number = 0;
  showMessages: any = {};
  strategy: string = 'userName';

  submitted = false;
  errors: string[] = [];
  messages: string[] = [];
  user: any = {};

  constructor(
    protected service: NbAuthService,
    @Inject(NB_AUTH_OPTIONS) protected options = {},
    protected cd: ChangeDetectorRef,
    protected router: Router
    ) {
      this.redirectDelay = this.getConfigValue('forms.requestPassword.redirectDelay');
      this.showMessages = this.getConfigValue('forms.requestPassword.showMessages');
      
    }

    requestPass(): void {
      this.errors = this.messages = [];
      this.submitted = true;
      this.service.requestPassword(this.strategy, {email: this.user.email}).subscribe(
        (result: NbAuthResult) => {
          this.submitted = false;
          if (result.isSuccess()) {
            this.messages = result.getMessages();
          } else {
            this.errors = result.getErrors();
          }
          const redirect = result.getRedirect();
          if (redirect) {
            setTimeout(() => {
              return this.router.navigateByUrl(redirect);
            }, this.redirectDelay);
          }
          this.cd.detectChanges();
      });
    }

    getConfigValue(key: string): any {
      return getDeepFromObject(this.options, key, null);
    }
}