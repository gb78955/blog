import { Injectable } from '@angular/core';
import {Post} from "../models/post.model";
import {Subject} from "rxjs";
import * as firebase from "firebase";
import DataSnapshot = firebase.database.DataSnapshot;
import {reject} from "q";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts: Post[] = [];
  postsSubject = new Subject<Post[]>();

  constructor() {
    this.getPosts();
  }

  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  getPosts() {
    firebase.database().ref('/posts')
      .on('value', (data: DataSnapshot) => {
          this.posts = data.val() ? data.val() : [];
          this.emitPosts();
        }
      );
  }

  savePosts() {
    firebase.database().ref('/posts').set(this.posts);
  }

  createPost(post: Post) {
    this.posts.push(post);
    this.savePosts();
    this.emitPosts();
  }

  removePost(post: Post) {
    const postIndexToRemove = this.posts.findIndex(
      (postRM) => {
        if(postRM === post) {
          return true;
        }
      }
    );
    this.posts.splice(postIndexToRemove, 1);
    this.savePosts();
    this.emitPosts();
  }

  updateLoveItsPost(post: Post, loveIts: number) {
    post.loveIts = post.loveIts + loveIts;
    this.savePosts();
    this.emitPosts();
  }
}
