import { Component, OnInit } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'link-dev';
  navHeight: number;
  ngOnInit() {
    setTheme('bs4');

    const height = document.getElementById('navbar').offsetHeight;
    this.navHeight = height;
  }
}
