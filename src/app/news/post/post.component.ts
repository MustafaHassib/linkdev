import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsServiceService } from 'src/app/service/news-service.service';
import { ArticlesEntity } from '/Users/mostafa/Documents/work/assessment/link-dev/src/app/models/news.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  postId;
  post;
  articles: import('/Users/mostafa/Documents/work/assessment/link-dev/src/app/models/news.model').ArticlesEntity[];
  constructor(
    private route: ActivatedRoute,
    private newsService: NewsServiceService
  ) {
    this.getPost();
  }

  ngOnInit(): void {}
  getPost() {
    const postId = this.route.snapshot.params.id;
    let singlePost;
    this.newsService.getNews().subscribe((post) => {
      this.articles = post.articles;
      singlePost = this.articles.filter((post) => post.id === parseInt(postId));
      this.post = singlePost[0];
      console.log(this.post);
    });
  }
}
