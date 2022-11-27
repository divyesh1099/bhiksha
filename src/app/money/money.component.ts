import { Component, OnInit } from '@angular/core';
import { BegMethods } from '../app.component';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-money',
  templateUrl: './money.component.html',
  styleUrls: ['./money.component.scss']
})

export class MoneyComponent implements OnInit {
  begmethods = [BegMethods.Whatsapp, BegMethods.Email, BegMethods.SMS];
  constructor(
  ) { }

  ngOnInit(): void {
  }

  public sendEmail(e: Event) {
    e.preventDefault();
      emailjs.sendForm('service_rjgdmbs', 'template_6ig14zl', e.target as HTMLFormElement, 'XjgQQj74RyUoRgx3-')
        .then((result: EmailJSResponseStatus) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
      });
  }

  onBegClick(beg:string, amount: number, message: string, e:Event){
    if(beg==BegMethods.Email){
      console.log(beg);
      this.sendEmail(e);
    }
  }

}
