import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../models/post.model";
import {PostsService} from "../../services/posts.service";

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {

  @Input() post: Post;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
  }

  onDeletePost(post: Post) {
    this.postsService.removePost(post);
  }

  onLoveIt(post: Post) {
    this.postsService.updateLoveItsPost(post, 1);
  }

  onDontLoveIt(post: Post) {
    this.postsService.updateLoveItsPost(post, -1);
  }
}
