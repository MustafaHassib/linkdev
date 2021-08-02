import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from 'src/app/service/news-service.service';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.scss'],
})
export class LatestNewsComponent implements OnInit {
  news;
  filteredDataArray;
  constructor(private newsService: NewsServiceService) {}

  ngOnInit(): void {
    this.getNews();
  }
  /**
   * HTTP Request to get news API
   */
  getNews() {
    this.newsService.getNews().subscribe((res) => {
      this.news = res.articles;
      // this.filteredDataArray = this.news;
      this.filteredDataArray = this.news.filter(
        (option) => option.showOnHomepage !== false
      );
      console.log(this.filteredDataArray);
    });
  }
}
