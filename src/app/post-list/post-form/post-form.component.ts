import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PostsService} from "../../services/posts.service";
import {Post} from "../../models/post.model";
import {Router} from "@angular/router";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  newpostForm: FormGroup;
  errorMessage: string;

  constructor(private formBuilder: FormBuilder,
              private postsService: PostsService,
              private router: Router,
              private  datePipe: DatePipe) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.newpostForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  onSavePost() {
    const title = this.newpostForm.get('title').value;
    const content = this.newpostForm.get('content').value;
    const createdAt = this.datePipe.transform(new Date(), 'dd/MM/yyyy HH:mm');
    const newPost = new Post(title, content, createdAt);
    this.postsService.createPost(newPost);
    this.router.navigate(['/posts'])
  }
}
