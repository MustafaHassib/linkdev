import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HighlightsComponent } from './highlights/highlights.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { HowWeHelpedComponent } from './how-we-helped/how-we-helped.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HomeComponent,
    HighlightsComponent,
    LatestNewsComponent,
    HowWeHelpedComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, HttpClientModule],
})
export class HomeModule {}
