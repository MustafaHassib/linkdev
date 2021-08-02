import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Tooltip } from 'node_modules/bootstrap/dist/js/bootstrap.esm.min.js';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  sidebarShow: boolean = false;
  dropdownShow: boolean = false;

  constructor(private router: Router) {}
  ngOnInit() {
    Array.from(
      document.querySelectorAll('button[data-bs-toggle="tooltip"]')
    ).forEach((tooltipNode) => new Tooltip(tooltipNode));
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        this.sidebarShow = false;
      }

      // window.scrollTo(0, 0);
    });
  }
}
