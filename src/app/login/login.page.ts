import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Capacitor } from '@capacitor/core';
import { SavePassword } from 'capacitor-ios-autofill-save-password';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string;
  password: string;
  phone: string;
  submitEnabled = true;

  constructor(private router: Router) { }

  ionViewWillEnter() {
    this.submitEnabled = true;
    this.email = '';
    this.password = '';
  }



  async onSubmit() {
    if ((this.email.length === 0)) {
      alert('Email must be specified.');
      return;
    }
    if ((this.password.length === 0)) {
      alert('Password must be specified.');
      return;
    }
    this.submitEnabled = false;

    await this.router.navigateByUrl('home');

    if (Capacitor.getPlatform() === 'ios') {
      await SavePassword.promptDialog({
        username: this.email,
        password: this.password
      });
    }
  }
}
