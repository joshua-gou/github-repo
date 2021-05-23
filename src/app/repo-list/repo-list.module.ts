import { NgModule } from '@angular/core';

import { RepoListRoutingModule } from './repo-list-routing.module';
import { MainComponent } from './main/main.component';
import { SharedModule } from '../shared';
import { RepoItemComponent } from './repo-item/repo-item.component';
import { TopLanguagesComponent } from './top-languages/top-languages.component';
import { MostUsedTopicsComponent } from './most-used-topics/most-used-topics.component';
import { PeopleComponent } from './people/people.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';


@NgModule({
  declarations: [
    MainComponent,
    RepoItemComponent,
    TopLanguagesComponent,
    MostUsedTopicsComponent,
    PeopleComponent,
    BottomBarComponent
  ],
  imports: [
    RepoListRoutingModule,
    SharedModule
  ]
})
export class RepoListModule { }
