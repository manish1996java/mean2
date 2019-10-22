import { Component } from '@angular/core';
import { Post } from './posts/post-list/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  storedpost:Post[] = [];

  onPostsAdd(post){
    console.log(post);
    this.storedpost.push(post);
  }
}
