import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController, ActionSheetController } from 'ionic-angular';
import { SocialSharing,GoogleAnalytics } from 'ionic-native';

import { HomePage } from '../home/home';
import { BrowsePage } from '../browse/browse';
import { ProfilePage } from '../profile/profile';
import { Http } from '@angular/http';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Pages
  data: any;
  result: any;
  tab1Root: any = HomePage;
  tab2Root: any = BrowsePage;
  tab4Root: any = ProfilePage;
  public tabIndex: Number = 0;
  constructor(public navCtrl: NavController, params: NavParams, public alertCtrl: AlertController, public http: Http, public loadingCtrl: LoadingController, public actionSheetCtrl: ActionSheetController) {
    this.data = params.get('data');
    
  }
  share() {
    var alert = this.alertCtrl.create();
    alert.setTitle('Choose horoscope sign');

    alert.addInput({
      type: 'radio',
      label: 'Aries',
      value: 'aries',
      checked: true
    });
    alert.addInput({
      type: 'radio',
      label: 'Taurus',
      value: 'taurus'
    })
    alert.addInput({
      type: 'radio',
      label: 'Gemini',
      value: 'gemini'
    })
    alert.addInput({
      type: 'radio',
      label: 'Cancer',
      value: 'cancer'
    })
    alert.addInput({
      type: 'radio',
      label: 'Leo',
      value: 'leo'
    })
    alert.addInput({
      type: 'radio',
      label: 'Virgo',
      value: 'virgo'
    })
    alert.addInput({
      type: 'radio',
      label: 'Libra',
      value: 'libra'
    })
    alert.addInput({
      type: 'radio',
      label: 'Scorpio',
      value: 'scorpio'
    })
    alert.addInput({
      type: 'radio',
      label: 'Sagittarius',
      value: 'sagittarius'
    })
    alert.addInput({
      type: 'radio',
      label: 'Capricorn',
      value: 'capricorn'
    })
    alert.addInput({
      type: 'radio',
      label: 'Aquarius',
      value: 'aquarius'
    })
    alert.addInput({
      type: 'radio',
      label: 'Pisces',
      value: 'pisces'
    })

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Share',
      handler: data => {
        //do something
        //sharing on facebook
        let actionSheet = this.actionSheetCtrl.create({
          title: 'Sharing',
          buttons: [
            {
              text: 'Share via Facebook',
              handler: () => {
                GoogleAnalytics.trackEvent("User","Share via Facebook");
                console.log('Share on facebook');
                SocialSharing.shareViaFacebook("My horoscope result", 'https://lisaguru.com/horoscopeapp/' + data, 'https://lisaguru.com/horoscopeapp/' + data).then(() => {
                  let confirm = this.alertCtrl.create({
                    title: 'Share completed',
                    subTitle: 'You have successfully shared this on Facebook',
                    buttons: ['OK']
                  });
                  confirm.present();
                }).catch(()=>{
                  console.log("cancel share with facebook");
                  /*let confirm = this.alertCtrl.create({
                    title: 'Share failed',
                    subTitle: 'Bad connection error. Please try again.',
                    buttons: ['OK']
                  });
                  confirm.present();*/
                });
              }
            },
            {
              text: "Share via Twitter",
              handler: () => {
                console.log('Share on Twitter');
                GoogleAnalytics.trackEvent("User","Share via Twitter");
                SocialSharing.shareViaTwitter("My horoscope result", 'https://lisaguru.com/horoscope/horoscopeapp/' + data, 'https://lisaguru.com/horoscope/horoscopeapp/' + data).then(() => {
                  let confirm = this.alertCtrl.create({
                    title: 'Share completed',
                    subTitle: 'You have successfully shared this on twitter',
                    buttons: ['OK']
                  });
                  confirm.present();
                }).catch(()=>{
                  console.log("cancel share with twitter");
                  /*let confirm = this.alertCtrl.create({
                    title: 'Share failed',
                    subTitle: 'Bad connection error. Please try again.',
                    buttons: ['OK']
                  });
                  confirm.present(); */
                });
              }
            },
            {
              text: "Cancel",
              role: "cancel",
              handler: () => {
                console.log("Cancel");
              }
            }
          ]
        });
        actionSheet.present();
      }
    })
    alert.present();
  }
}
