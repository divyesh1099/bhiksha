import { Component } from '@angular/core';

export enum BegMethods{
  Whatsapp=  'whatsapp',
  Email = 'email',
  SMS = 'sms'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'bhiksha';
}
