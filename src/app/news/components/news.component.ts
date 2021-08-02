import { Component, OnInit, ViewChild } from '@angular/core';
import { NewsServiceService } from '../../service/news-service.service';
import * as NEWS_CATEGORIES from '../../models/news.model';
import { NzDatePickerComponent } from 'ng-zorro-antd/date-picker';
import { format, formatISO } from 'date-fns';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  @ViewChild('endDatePicker') endDatePicker!: NzDatePickerComponent;
  startValue: Date | null = null;
  endValue: Date | null = null;

  newsCategories: NEWS_CATEGORIES.SourceCategoryEntity[];
  news: NEWS_CATEGORIES.ArticlesEntity[];
  filteredDataArray;
  bsRangeValue = [];
  bsValue;
  maxDate;
  startDate;
  endDate;
  userSearchKeyWord;
  filteredArrayWithCategory: NEWS_CATEGORIES.ArticlesEntity[] = [];

  constructor(private newsService: NewsServiceService) {
    this.bsRangeValue = [this.bsValue, this.maxDate];
  }

  ngOnInit(): void {
    this.getNewsCategories();
    this.getNews();
  }

  /**
   * Get News' Category
   */
  getNewsCategories() {
    this.newsService.getNewsCategories().subscribe((res) => {
      this.newsCategories = res.sourceCategory;
    });
  }

  /**
   * HTTP Request to get news API
   */
  getNews() {
    this.newsService.getNews().subscribe((res) => {
      this.news = res.articles;
      this.filteredDataArray = this.news;
    });
  }

  /**
   * Formate the given date from the date picker
   * @param date FullDate
   * @returns Normal Date without milliseconds {dd/mm/yyyy}
   */
  formatDate(date: Date) {
    return formatISO(date, { representation: 'date' });
  }

  /**
   * Filter news data with date
   */
  filterWithDate() {
    const { startDate, endDate, formatDate } = this;

    // formatISO({ representation: 'date' });
    if (startDate && endDate) {
      this.filteredDataArray = this.news.filter(
        (article) =>
          formatDate(new Date(article.publishedAt)) >=
            formatDate(new Date(startDate)) &&
          formatDate(new Date(article.publishedAt)) <=
            formatDate(new Date(endDate))
      );
    }
  }

  // filter({
  //   filterType,
  //   filterValues,
  // }: {
  //   filterType: FilterTypes;
  //   filterValues: string | object;
  // }): any {
  //   const FilteredValues = {
  //     [FilterTypes.FILTER_DATE]: [...values],
  //     [FilterTypes.FILTER_CATEGORY]: [...values],
  //   };

  //   FilteredValues.reduce((accumlator, next) => [..], []);

  //   switch (filterType) {
  //     case FilterTypes.FILTER_DATE:
  //       // TODO: filter with date values filterValues as {startDate, endDate};
  //       break;
  //     case FilterTypes.FILTER_CATEGORY:
  //       // TODO: filter with date values filterValues as `TechCrunch`;
  //       break;

  //     default:
  //       break;
  //   }
  // }

  /**
   *  Filters news data with category
   * @param category = the selected Category
   */
  filterWithCategory(category) {
    console.log();

    const selectedCategory = category;
    if (category == 'all') {
      this.filteredDataArray = this.news;
    } else {
      this.filteredArrayWithCategory = this.filteredDataArray;

      this.filteredArrayWithCategory = this.news.filter(
        (option) =>
          option.title
            .toLowerCase()
            .indexOf(selectedCategory.toString().toLowerCase()) !== -1
      );
      this.filteredDataArray = this.filteredArrayWithCategory;
    }
  }

  /**
   * Filter with words or letters in News' Title
   * This function checks if there is a selected category or not,
   * so the search can work in a selected category or in all news.
   */
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

  /**
   * Disables Range datePicker start value
   * @param startValue
   * @returns
   */
  disabledStartDate = (startValue: Date): boolean => {
    if (!startValue || !this.endValue) {
      return false;
    }
    return startValue.getTime() > this.endValue.getTime();
  };

  /**
   * Disables Range datePicker end value
   * @param startValue
   * @returns
   */
  disabledEndDate = (endValue: Date): boolean => {
    if (!endValue || !this.startValue) {
      return false;
    }
    return endValue.getTime() <= this.startValue.getTime();
  };

  /**
   * Check if the start picker is active or not
   * if not active, open end date picker
   * @param open
   */
  handleStartOpenChange(open: boolean): void {
    if (!open) {
      this.endDatePicker.open();
    }
  }

  /**
   * Check for changes in date picker input
   * @param result {startDate, endDate}
   */
  onChange(result: Date): void {
    console.log(
      'onChange: ',
      formatISO(this.startDate, { representation: 'date' })
    );
    this.filterWithDate();
  }

  compare(a, b) {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  }
  sortBy(sort) {
    if (sort == 'asc') {
      this.filteredDataArray.sort(this.compare);
    } else {
      this.filteredDataArray.reverse(this.compare);
    }
  }
}
