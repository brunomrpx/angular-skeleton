import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { routes } from 'pages/home/home.route';

import { HomeComponent } from 'pages/home/home.component';

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [
    HomeComponent
  ],
  entryComponents: [
    HomeComponent
  ],
  providers: [],
})
export class HomeModule { }
