import { NgModule } from '@angular/core';

import { RepoListRoutingModule } from './repo-list-routing.module';
import { MainComponent } from './main/main.component';
import { SharedModule } from '../shared';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    RepoListRoutingModule,
    SharedModule
  ]
})
export class RepoListModule { }
