import { Component, OnInit } from '@angular/core';
import { WPAPIService } from 'src/services/wpapi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  // @Input() token;
  search: any;
  posts: any = null;
  categories: any = null;
  page: string | number;
  // media: any[];
  // mediaLink: any;

  constructor( private wpApiService: WPAPIService,
    private route: ActivatedRoute) {
    this.page= this.route.snapshot.paramMap.get('page') ? this.route.snapshot.paramMap.get('page') : 1;
  }
  ngOnInit() {
    this.wpApiService.posts('per_page=12').subscribe((posts: any) => {this.posts = posts; console.log(this.posts); });

  }
getSearch() {
  // this.wpApiService.posts('search=' + search).subscribe(posts => {this.posts = posts; });
}
getCategoryFilter(search: any) {
  this.wpApiService.posts('categories=' + search).subscribe((posts: any) => {this.posts = posts; });

}
}
