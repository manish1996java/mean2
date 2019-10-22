import { Component, OnInit ,Input} from '@angular/core';
import { Post } from './post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  // posts = [
  //   {
  //     tittle: 'title 1',
  //     description: 'description 1',
  //     content: 'content 1',
  //   },
  //   {
  //     tittle: 'title 2',
  //     description: 'description 2',
  //     content: 'content 2',
  //   },
  //   {
  //     tittle: 'title 3',
  //     description: 'description 3',
  //     content: 'content 3',
  //   },
  //   {
  //     tittle: 'title 4',
  //     description: 'description 4',
  //     content: 'content 4',
  //   },
  //   {
  //     tittle: 'title 5',
  //     description: 'description 5',
  //     content: 'content 5',
  //   },
  // ];
  @Input() posts:Post[] = [];

  constructor() { }

  ngOnInit() {
  }

}
