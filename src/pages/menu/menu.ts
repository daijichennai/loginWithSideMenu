import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav, App } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  username = '';
  pages = [];
  @ViewChild(Nav) nav: Nav;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public auth: AuthProvider,
    public appCtrl :App
  ) {
  }

  ionViewWillEnter() {
    if (this.auth.isAdmin()) {
      this.pages = [
        { title: 'Admin Dashboard', page: 'AdminPage', icon: 'home' },
        { title: 'User Dashboard', page: 'UserPage', icon: 'home' }
      ]
      this.openPage('AdminPage');
    } else {
      this.pages = [
        { title: 'User Dashboard', page: 'UserPage', icon: 'home' }
      ]
      this.openPage('UserPage');
    }
    this.username = this.auth.currentUser.name;
  }

  openPage(page) {
    this.nav.setRoot(page);
  }

  logout() {
    this.auth.logOut();
    //this.nav.setRoot('LoginPage'); //wrong
     this.appCtrl.getRootNav().setRoot('LoginPage');  //Right
  }

  ionViewCanEnter() {
    return this.auth.isLoggedIn();
  }
}
