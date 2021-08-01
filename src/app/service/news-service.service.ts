import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as NEWS_CATEGORIES from '../models/news.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsServiceService {
  constructor(private http: HttpClient) {}

  getNewsCategories(): Observable<NEWS_CATEGORIES.newsCategoriesModel> {
    return this.http.get('https://api.npoint.io/c138bb84dc0b94ec5a18');
  }

  getNews(): Observable<NEWS_CATEGORIES.newsModel> {
    return this.http.get('https://api.npoint.io/e2534d5412765bf36702');
  }
}
