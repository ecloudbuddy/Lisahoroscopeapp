import { Component } from '@angular/core';
import { Facebook,GoogleAnalytics} from 'ionic-native';
import { NavController, AlertController, Events, LoadingController, App } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { SignupPage } from '../signup/signup';
import { PrivacyPolicyPage } from '../privacy-policy/privacy-policy';
import { TermsOfServicesPage } from '../terms-of-services/terms-of-services';
import { TutorialPage } from '../tutorial/tutorial';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/map'

declare const facebookConnectPlugin: any;

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [Facebook]
})
export class LoginPage {
  PrivacyPolicyPage = PrivacyPolicyPage;
  TermsOfServicesPage = TermsOfServicesPage;

  email: any;
  password: any;
  data: any;
  birthdate: any;
  forgetEmail: any;
  disableSubmit: boolean = false;
  _loginsub: (dataObj: any) => void;
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public http: Http, public events: Events, public loadingCtrl: LoadingController, public app: App) {
    this.data = null;
    GoogleAnalytics.trackView('LoginPage')
  }
  loginHandler(dataObj) {
    this.data = dataObj[0];
    console.log("Login with facebook Successful");
    this.gotoProfile();
    //this.data = null;
  }
  ngOnInit() {
    //Wait for events login wiht Facebook
    this._loginsub = (dataObj) => {
      this.loginHandler(dataObj);
    };
    this.events.subscribe('logined', this._loginsub);
  }
  ionViewDidLeave() {
    console.log('Leaving this page');
    if (this._loginsub) {
      this.events.unsubscribe('logined', this._loginsub);
      this._loginsub = undefined;
      console.log("clear events");
    }
  }

  forgotPassword() {
    let prompt = this.alertCtrl.create({
      title: 'Let’s find your account',
      message: "Please enter your email address",
      inputs: [
        {
          name: 'Email',
          placeholder: 'Email'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Submit',
          handler: data => {
            console.log('submit clicked');
            this.forgetEmail = data.Email.toLowerCase();
            this.requestToresetPass();
          }
        }
      ]
    });
    prompt.present();
  }
  requestToresetPass() {
    if (!this.forgetEmail) {
      var alert = this.alertCtrl.create({
        title: "Sign up failed",
        subTitle: "Please enter your email",
        buttons: ["Close"]
      });
      alert.present();
    }
    else if (!this.validateEmail(this.forgetEmail)) {
      var alert = this.alertCtrl.create({
        title: "Sign up failed",
        subTitle: "Please enter your email in email format",
        buttons: ["Close"]
      });
      alert.present();
    }
    else {
      GoogleAnalytics.trackEvent("User","Request new password");
      var data = {
        email: this.forgetEmail
      };
      this.http.post("https://horoscope.lisaguru.com/api/forgotPassword", data)
        .subscribe(data => {
          if (data.json().success == false) {
            var alert = this.alertCtrl.create({
              title: "Error",
              subTitle: data.json().message,
              buttons: ["Close"]
            });
            alert.present();
          } else {
            var alert = this.alertCtrl.create({
              title: "We just emailed you a link",
              subTitle: "Please check your email address to continue.",
              buttons: ["Close"]
            });
            alert.present();
          }
        }, error => {
          var alert = this.alertCtrl.create({
            title: "Connection failed",
            subTitle: "Apologies for the inconvenience. Please try again later.",
            buttons: ["Close"]
          });
          alert.present();
        });
    }
  }
  gotoProfile() {
    console.log('GO to profile');
    this.http.post('https://horoscope.lisaguru.com/auth/userinfo', this.data)
      .subscribe(data => {
        if (data.json().success == false) {
          var alert = this.alertCtrl.create({
            title: "Login Failed",
            subTitle: this.data.message,
            buttons: ['Close']
          });
          alert.present();
        } else {
          if (this.data.isNewUser === true) {
            this.navCtrl.push(TutorialPage, { data: data.json() });
            this.data = null;
          } else {
            this.app.getRootNav().setRoot(TabsPage, { data: data.json() });
            this.data = null;
          }
        }
      }, error => {
        console.log(error);
      })
    let loader = this.loadingCtrl.create({
      content: "Logging in ....",
      duration: 500,
      dismissOnPageChange: true
    });
    loader.present();
  }
  gotoSignUp() {
    this.navCtrl.push(SignupPage);
  }
  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  loginEmail() {
    this.disableSubmit = true;
    if (this.email === undefined || this.password === undefined || this.email === null || this.password === null) {
      var alert = this.alertCtrl.create({
        title: "Login failed",
        subTitle: "Please enter your email and password",
        buttons: ["Close"]
      });
      alert.present();
      this.disableSubmit = false;
    }
    else {
      var data = {
        email: this.email.toLowerCase(),
        password: this.password
      };
      if (!this.email || !this.password) {
        var alert = this.alertCtrl.create({
          title: "Login failed",
          subTitle: "Please enter your email and password",
          buttons: ["Close"]
        });
        alert.present();
        this.disableSubmit = false;
      } else if (!this.validateEmail(data.email)) {
        var alert = this.alertCtrl.create({
          title: "Login failed",
          subTitle: "Please make sure that you type in your email address correctly.",
          buttons: ["Close"]
        });
        alert.present();
        this.disableSubmit = false;
      } else {
        GoogleAnalytics.trackEvent("User","login with email");
        console.log("Logging in with email");
        this.http.post("https://horoscope.lisaguru.com/api/login", data)
          .subscribe(data => {
            this.data = data.json();
            if (this.data.success === false) {
              var alert = this.alertCtrl.create({
                title: "Login failed",
                subTitle: this.data.message,
                buttons: ['Close']
              });
              alert.present();
              this.email = null;
              this.password = null;
              this.disableSubmit = false;
            }
            else if (this.data.option == true) {
              var alert = this.alertCtrl.create({
                title: "Login failed",
                subTitle: this.data.message,
                buttons: [
                  {
                    text: 'Resend the email',
                    handler: data => {
                      console.log('resend the email clicked');
                      this.resendEmail(this.data.email);
                    }
                  },
                  {
                    text: 'Cancel',
                    handler: data => {
                      console.log('Cancel clicked');
                    }
                  }
                ]
              });
              alert.present();
              this.email = null;
              this.password = null;
              this.disableSubmit = false;
            }
            else {
              console.log('Login Successful');
              this.disableSubmit = false;
              this.gotoProfile();
              this.email = null;
              this.password = null;
            }
          }, error => {
            var alert = this.alertCtrl.create({
              title: "Login failed",
              subTitle: "Please try again later",
              buttons: ["Close"]
            });
            alert.present();
            this.disableSubmit = false;
          });
      }
    }
  }
  resendEmail(email) {
    var data = {
      email: email
    }
    this.http.post("https://horoscope.lisaguru.com/api/resendEmail", data)
      .subscribe(data => {
        console.log('resend the email');
        var alert = this.alertCtrl.create({
          title: data.json().title,
          subTitle: data.json().message,
          buttons: ["Close"]
        });
        alert.present();
      }, error => {
        var errorAlert = this.alertCtrl.create({
          title: "Resend the email failed",
          subTitle: "Please try again later",
          buttons: ["Close"]
        });
        errorAlert.present();
      });
  }
  loginFB() {
    //this.disableSubmit = true;
    var http = this.http;
    var events = this.events;
    var alert = this.alertCtrl;
    GoogleAnalytics.trackEvent("User","Login with facebook");
    facebookConnectPlugin.login(['public_profile', 'email'], function (response) {
      console.log("Starting login with FBBBBB!")
      facebookConnectPlugin.api("me/?fields=id,email,name,picture.type(large)", ["email"],
        function (result) { // Access api successful
          var id = result["id"];
          var email = result["email"];
          var name = result["name"];
          var picture = result["picture"];
          var dataObj: any = {
            id: id,
            email: email,
            name: name,
            picture: picture
          };
          http.post("https://horoscope.lisaguru.com/api/loginfb", dataObj)
            .subscribe(data => {
              events.publish('logined', data.json());//trigger the event to start
              console.log("Successful");
            }, error => {
              var errorAlert = alert.create({
                title: "Connection failed",
                subTitle: "Apologies for the inconvenience. Please try again later.",
                buttons: ["Close"]
              });
              errorAlert.present();
              console.log("Failure");
            });

        }, function (error) { // Access API Failure
          console.log("Error Login with facebook");
          console.log(error.message());
          var alert = this.alertCtrl.create({
            title: "Connection failed",
            subTitle: "Apologies for the inconvenience. Please try again later.",
            buttons: ["Close"]
          });
          alert.present();
        });
    }, function (error) {
      console.log(error.message());
      console.log('Cancel!!!!!');
    });
  }
}
