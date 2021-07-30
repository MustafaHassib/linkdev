import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Tooltip } from 'node_modules/bootstrap/dist/js/bootstrap.esm.min.js';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  sidebarShow: boolean = false;
  dropdownShow: boolean = false;

  constructor() {}
  ngOnInit() {
    Array.from(
      document.querySelectorAll('button[data-bs-toggle="tooltip"]')
    ).forEach((tooltipNode) => new Tooltip(tooltipNode));
  }
  toggleMenu() {
    console.log('sdfa');
  }
}
