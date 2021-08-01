import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './components/news.component';
import { NewsServiceService } from '../service/news-service.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  declarations: [NewsComponent],
  imports: [
    CommonModule,
    NewsRoutingModule,
    HttpClientModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
  ],
  providers: [NewsServiceService],
})
export class NewsModule {}
