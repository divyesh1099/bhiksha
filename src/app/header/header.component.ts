import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navItems = [{title: 'Money', value: 'money'}, {title: 'Emotions', value: 'emotions'}, {title: 'Date', value: 'date'}, {title: 'Profile', value: 'profile'}];
  constructor() { }

  ngOnInit(): void {

  }

}
