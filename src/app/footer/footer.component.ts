import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  message= 'Created just for fun by';
  linkedin= 'https://www.linkedin.com/in/divyesh-vishwakarma-621197175/'
  constructor() { }

  ngOnInit(): void {
  }

}
