import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './components/news.component';
import { NewsServiceService } from '../service/news-service.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ZorroAntdModule } from '../shared/antd-zorro.module';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [NewsComponent, PostComponent],
  imports: [
    CommonModule,
    NewsRoutingModule,
    HttpClientModule,
    FormsModule,
    ZorroAntdModule,
    BsDatepickerModule.forRoot(),
  ],
  providers: [NewsServiceService],
})
export class NewsModule {}
