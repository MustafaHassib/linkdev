import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'link-dev';
  navHeight: number;
  ngOnInit() {
    const height = document.getElementById('navbar').offsetHeight;
    this.navHeight = height;
  }
}
