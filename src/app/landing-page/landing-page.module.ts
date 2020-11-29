import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LandingPageComponent} from "./landing-page.component";
import {Route, RouterModule} from "@angular/router";
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Route[] = [
  {path: '', component: LandingPageComponent},
  {path: '*', redirectTo: ''}
]

@NgModule({
  declarations: [LandingPageComponent, SignUpComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
  ]
})
export class LandingPageModule { }
