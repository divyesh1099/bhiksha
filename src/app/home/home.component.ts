import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data = [
    {img_and_url: 'money', alt: 'Money', top:'150%', message: 'Beg for money online. You can upload your UPI QR Code or your UPI Id to get beggings directly in your account'},
    {img_and_url: 'emotions', alt: 'Emotions', top:'250%', message: 'Beg for Emotions online. You can beg for emotions like Happiness and Forgivenss via email'},
    {img_and_url: 'date', alt: 'Date', top:'350%', message: 'Get your crush to have pity on you by begging them for a date. '}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
