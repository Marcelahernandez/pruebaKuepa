import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject } from '@angular/core';
import { NbAuthResult, NbAuthService, NB_AUTH_OPTIONS, getDeepFromObject } from '@nebular/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'nb-reset-password-page',
  styleUrls: ['./reset-password.component.scss'],
  templateUrl: './reset-password.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NbResetPasswordComponent {

  redirectDelay: number = 0;
  showMessages: any = {};
  strategy: string = 'userName';

  submitted = false;
  errors: string[] = [];
  messages: string[] = [];
  user: any = {};

  constructor(protected service: NbAuthService,
    @Inject(NB_AUTH_OPTIONS) protected options = {},
    protected cd: ChangeDetectorRef,
    protected router: Router) {
    this.redirectDelay = this.getConfigValue('forms.resetPassword.redirectDelay');
    this.showMessages = this.getConfigValue('forms.resetPassword.showMessages');
  }

  resetPass(): void {
    this.errors = this.messages = [];
    this.submitted = true;
    console.log(this.user);
    this.service.resetPassword(this.strategy, {email: this.user.email, password: this.user.password, passwordRepeat: this.user.passwordRepeat, passwordReset: this.user.passwordReset}).subscribe((result: NbAuthResult) => {
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
