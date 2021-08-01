import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from '../../service/news-service.service';
import * as NEWS_CATEGORIES from '../../models/news.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  newsCategories: NEWS_CATEGORIES.SourceCategoryEntity[];

  news: NEWS_CATEGORIES.ArticlesEntity[];

  filteredDataArray;

  bsValue = new Date();
  bsRangeValue: Date[];
  maxDate = new Date();

  userSearchKeyWord;
  filteredArrayWithCategory: NEWS_CATEGORIES.ArticlesEntity[] = [];

  constructor(private newsService: NewsServiceService) {
    this.bsRangeValue = [this.bsValue, this.maxDate];
  }

  ngOnInit(): void {
    this.getNewsCategories();
    this.getNews();
  }

  getNewsCategories() {
    this.newsService.getNewsCategories().subscribe((res) => {
      this.newsCategories = res.sourceCategory;
    });
  }

  getNews() {
    this.newsService.getNews().subscribe((res) => {
      this.news = res.articles;
      this.filteredDataArray = this.news;
    });
  }

  filterWithDate() {
    let sd = new Date(this.bsRangeValue[0]).getTime();
    let ed = new Date(this.bsRangeValue[1]).getTime();
    let result = this.news.filter((d) => {
      let time = new Date(d.publishedAt).getTime();
      return sd <= time && time <= ed;
    });

    this.filteredDataArray = result;
  }

  filterWithCategory(e) {
    const selectedCategory = e.target.innerText;

    this.filteredArrayWithCategory = this.filteredDataArray;

    this.filteredArrayWithCategory = this.news.filter(
      (option) =>
        option.title
          .toLowerCase()
          .indexOf(selectedCategory.toString().toLowerCase()) !== -1
    );
    this.filteredDataArray = this.filteredArrayWithCategory;
  }

  filterFunction(arr) {}
  // This Method Need To Be Refactored But Will Skip This For Now to meet The deadline
  filterWithSearchKeyWord() {
    let filteredLetters;
    if (this.filteredArrayWithCategory.length > 0) {
      filteredLetters = this.filteredArrayWithCategory;

      if (this.userSearchKeyWord.length > 0) {
        filteredLetters = this.filteredArrayWithCategory.filter(
          (item) =>
            item.title
              .toLowerCase()
              .indexOf(this.userSearchKeyWord.toString().toLowerCase()) !== -1
        );
      } else {
        filteredLetters = this.filteredArrayWithCategory;
      }
    } else {
      filteredLetters = this.filteredDataArray;
      if (this.userSearchKeyWord.length >= 0) {
        filteredLetters = this.news.filter(
          (item) =>
            item.title
              .toLowerCase()
              .indexOf(this.userSearchKeyWord.toString().toLowerCase()) !== -1
        );
      } else {
        filteredLetters = this.filteredDataArray;
      }
    }

    this.filteredDataArray = filteredLetters;
  }
}
