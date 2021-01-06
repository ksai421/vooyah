import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController, Platform } from '@ionic/angular';
import { AccountService, AlertService } from '@app/account/services';
import { EnterEmailComponent } from './enteremail.component';
import { UserProfileService } from '@app/service-module/user-profile.service';
@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, AfterViewInit {
  form: FormGroup;
  loading = false;
  submitted = false;
  forgotPasswordClicked = false;
  invalidUser = false;
  isChecked = false;
  public auth2: any;
  userPresent: any;
  userLogin = 'login_user';
  passwordType = 'password';
  passwordIcon = 'eye-off';

  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    private alertService: AlertService,
    public platform: Platform,
    public modalController: ModalController,
    private userProfileService: UserProfileService
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^(\+([0-9]{2,3})\)?[-.]?([0-9]{5})[-. ]?([0-9]{5})$|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/
          ),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^0-9]*[0-9]).{8,}'
          ),
        ],
      ],
      // acceptTerms: [false, Validators.requiredTrue],
    });
    console.log(this.form);
  }
  onKey(event: any) {
    // without type info
    if (event.target.value) {
      this.invalidUser = false;
    }
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.form.controls;
  }
  async presentForgotPassword() {
    this.accountService.postLoginEvent({ name: 'forgot' });
  }

  checkTerms() {
    this.form.value.agree = true;
    console.log(this.form);
  }

  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this.loading = true;
    this.accountService
      .login(this.f.username.value, this.f.password.value)
      .then((res) => {
        console.log(res);
        this.loading = false;
        this.invalidUser = false;
        this.accountService.confirmSignUp(this.userLogin);
        // get return url from query parameters or default to home page
        // const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        this.accountService.postLoginEvent({ name: 'close' });

        // this.router.navigateByUrl(returnUrl);
      })
      .catch((error) => {
        console.log(error);
        this.invalidUser = true;
        localStorage.removeItem('user');
        this.userProfileService.userPresent(true);
        // this.alertService.error(error);
        this.loading = false;
      });
  }

  isIos() {
    return this.platform.is('ios');
  }

  isMobile() {
    return this.platform.is('mobile');
  }

  ngAfterViewInit() {}

  openRegister() {
    this.accountService.postLoginEvent({ name: 'register' });
  }

  onClickGoogle() {
    this.accountService.googleSignIn();
  }

  onClickFacebook() {
    this.accountService.facebookSignIn();
  }
  closeModal() {
    this.modalController.dismiss();
  }

  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }
}
