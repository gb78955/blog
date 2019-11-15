import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignInComponent} from "./auth/sign-in/sign-in.component";
import {SignUpComponent} from "./auth/sign-up/sign-up.component";
import {PostListComponent} from "./post-list/post-list.component";
import {PostFormComponent} from "./post-list/post-form/post-form.component";
import {FourOhFourComponent} from "./four-oh-four/four-oh-four.component";
import {AuthGuardService} from "./services/auth-guard.service";


const routes: Routes = [
  {path: 'auth/sign-in', component: SignInComponent},
  {path: 'auth/sign-up', component: SignUpComponent},
  {path: 'posts', canActivate: [AuthGuardService], component: PostListComponent},
  {path: 'posts/new', canActivate: [AuthGuardService], component: PostFormComponent},
  {path: '', redirectTo: 'posts', pathMatch: 'full'},
  {path: 'not-found', component: FourOhFourComponent},
  {path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
