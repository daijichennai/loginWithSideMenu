import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {
    username : 'admin',
    password : 'admin'
  };
  constructor(
              public navCtrl: NavController,
              public navParams: NavParams,
              public auth: AuthProvider,
              public alertCtrl : AlertController
              ) {
  }

  ionViewDidLoad() {
    
  }

  loginUser() { 
    this.auth.login(this.user.username,this.user.password).then(success =>{
      if(success){
        this.navCtrl.setRoot('MenuPage');
      }
    }).catch(err =>{
      let alert = this.alertCtrl.create({
        title: 'Login Failed',
        message: 'Please check your credentials',
        buttons: ['OK']
      });
      alert.present();
    });
  }

}
