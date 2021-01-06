import { from } from 'rxjs';
import { ConfirmPasswordComponent } from './../account/components/confirm-password/confirm-password.component';
import { EnterEmailComponent } from '@app/account/components/enteremail.component';
import { AccountService } from '@app/account/services';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterComponent, ConfirmComponent } from '@app/account/components';
import { MenuController, ModalController } from '@ionic/angular';
import { LoginComponent } from '.././account/components/login.component';
import { ForgotOtpConfirmComponent } from '@app/account/components/forgototpconfirm/forgototpconfirm.component';
import { UserProfileService } from '@app/service-module/user-profile.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit {
  navs;
  otpconfirmed: any;
  loginModelStatus = true;
  isLoggedIn = false;
  userName = '';
  userNamePrint: any;
  infoMessage = '';
  logInresponce: any;
  userPresent: any;
  Sociallogin: any;
  googleLogin: any;
  googleCheck: any;
  enteredUserDetails: any;
  googleSignup: any;
  constructor(
    private route: Router,
    private homemenu: MenuController,
    public modalController: ModalController,
    private accountService: AccountService,
    private cdRef: ChangeDetectorRef,
    private userProfileService: UserProfileService,
    private http: HttpClient
  ) {
    this.reloadUser();
  }

  ngOnInit() {
    // let f = 'gana9788@gmail.com';
    // this.http
    //   .post<any>(
    //     'http://localhost:3030/api/change-notify',
    //     JSON.stringify({
    //       notifyType: 0,
    //       data: {
    //         data: {
    //           email: f,
    //           firstName: 'k;l',
    //           lastName: 'kl',
    //         },
    //       },
    //     })
    //   )
    //   .subscribe((res) => {
    //     console.log(res);
    //   });
    this.enteredUserDetails = this.accountService.getCognitoUser();
    console.log(this.enteredUserDetails, 'enteredUserDetails');
    this.accountService.currentLoginEvent.subscribe((x) => {
      switch (x.name) {
        case 'close':
        case 'dismiss':
          this.modalController.dismiss();
          break;
        case 'register':
          this.modalController.dismiss();
          this.presentSignup();

          break;
        case 'login':
          this.modalController.dismiss();
          this.presentLogin();
          break;
        case 'Otp_enter':
          this.modalController.dismiss();
          this.otpEnter();
          break;
        case 'forgot':
          this.modalController.dismiss();
          this.presentForgotPassword();
          break;
        case 'forgotOtp':
          this.modalController.dismiss();
          this.presentForgotOtp((x.data as any).username);
          break;
        case 'forgotConfirmPassword':
          this.modalController.dismiss();
          const data = x.data as any;
          this.presentForgotPasswordConfirm(data.username, data.otp);
          break;
      }
      this.reloadUser();
    });

    this.accountService.user.subscribe((user) => {
      this.reloadUser();
    });
    this.reloadUser();

    //   this.userProfileService.currentUserLogin.subscribe((res) => {
    //  console.log(res)

    this.accountService.isLoggedIn().then((loggedIn) => {
      this.isLoggedIn = loggedIn;
    });
    console.log(this.isLoggedIn, 'loggedIn');
  }
  // loginSignupTabs() {
  //   this.loginModelStatus = false;
  //   if (this.loginModelStatus === false) {
  //     this.userProfileService.userccNavigate(true);
  //   }
  // }
  openhomemenu() {
    this.homemenu.enable(true, 'hm_menu');
    this.homemenu.open('hm_menu');
  }
  menu_click() {
    this.homemenu.close('hm_menu');
  }
  routechange() {
    this.route.navigateByUrl('/destination');
  }
  gotoaccount() {
    this.userProfileService.navigateToTravellers.next('dropdown');
    this.route.navigate(['/myaccount/profile']);
  }
  async presentLogin() {
    const modal = await this.modalController.create({
      component: LoginComponent,
      cssClass: 'login-modal-css',
      // cssClass: 'loginPage',
      componentProps: { value: 123 },
      backdropDismiss: true,
      // presentingElement: await this.modalCtrl.getTop()
    });
    return await modal.present();
  }
  async presentSignup() {
    const modal = await this.modalController.create({
      component: RegisterComponent,
      cssClass: 'signup-modal-css',
      backdropDismiss: true,
      // cssClass: 'loginPage',
      componentProps: { value: 123 },
    });

    return await modal.present();
  }
  async otpEnter() {
    const modal = await this.modalController.create({
      component: ConfirmComponent,
      cssClass: 'signup-modal-css',
      // cssClass: 'loginPage',
      componentProps: { value: 123 },
      backdropDismiss: false,
      // presentingElement: await this.modalCtrl.getTop()
    });
    return await modal.present();
  }
  async presentForgotOtp(username: string) {
    const modal = await this.modalController.create({
      component: ForgotOtpConfirmComponent,
      cssClass: 'forgotOtp-modal-css',
      componentProps: { username },
      backdropDismiss: false,
    });

    return await modal.present();
  }

  async presentForgotPassword() {
    const modal = await this.modalController.create({
      component: EnterEmailComponent,
      cssClass: 'enteremail-modal-css',
    });
    return await modal.present();
  }

  async presentForgotPasswordConfirm(username: string, otp: string) {
    const modal = await this.modalController.create({
      component: ConfirmPasswordComponent,
      cssClass: 'forgotConfirm-modal-css',
      componentProps: { username, otp },
      backdropDismiss: false,
    });
    return await modal.present();
  }

  dismiss() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }
  reloadUser() {
    let userDetail = JSON.parse(localStorage.getItem('user'));

    // if (userDetail !== null) {

    // }
    // else {
    //   this.accountService.confirmSignUp(this.noUserAccount);
    // }
    //  this.otpconfirmed = JSON.parse(localStorage.getItem('otpconfirmed'));
    // this.googleCheck = JSON.parse(localStorage.getItem('amplify-redirected-from-hosted-ui'));

    console.log(this.otpconfirmed);
    this.userPresent = userDetail;
    console.log(this.userPresent, this.googleCheck, 'kkkk');
    if (this.userPresent === null) {
      this.loginModelStatus = true;
      this.isLoggedIn = false;
    }
    this.otpconfirmed = localStorage.getItem('otpconfirmed');
    this.googleSignup = localStorage.getItem(
      'amplify-redirected-from-hosted-ui'
    );
    console.log(this.otpconfirmed, this.googleSignup, 'otpconfirmed');
    if (
      (this.userPresent !== null && this.otpconfirmed == 'yes') ||
      (this.userPresent !== null && this.googleSignup == 'true')
    ) {
      let xname = this.userPresent?.username.split('@');
      console.log(this.userPresent, 'userPresent');
      this.infoMessage = xname[0];
      if (this.infoMessage.length > 0) {
        this.userProfileService.userccNavigate(true);
        this.loginModelStatus = false;
      }
    }
    if (
      this.userPresent !== undefined &&
      this.userPresent?.username === 'true'
    ) {
      console.log(this.userPresent, 'user');
      let x = this.userPresent?.username.split('@');
      this.infoMessage = x[0];
    }

    try {
      this.cdRef.detectChanges();
    } catch (e) {}
  }

  clearUser() {
    this.loginModelStatus = true;
    this.isLoggedIn = false;
    localStorage.clear();
    sessionStorage.clear();
    //this.userPresent = null;
    // this.loginModelStatus = true;
    this.reloadUser();
    this.route.navigateByUrl('/');
    this.userProfileService.userccNavigate(false);
    this.accountService.logout();
    this.userProfileService.clearOnLogout();
    //this.isLoggedIn = false;
    //location.reload();
  }
}
