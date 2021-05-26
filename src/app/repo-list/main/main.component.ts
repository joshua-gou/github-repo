import { Component, Inject, OnInit } from '@angular/core';
import { BACKEND_SERVICE_TOKEN, IBackendService } from 'src/app/core';
import { Language, Member, RepoItem } from 'src/app/shared';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  repos!: RepoItem[];
  members!: Member[];
  topLangs: Language[] = [];
  mostUsedTopics: string[] = [];
  isDataLoaded = false;

  constructor(
    @Inject(BACKEND_SERVICE_TOKEN) private _backendService: IBackendService
  ) { }

  ngOnInit(): void {
    this._backendService.repos$.subscribe(res => this.repos = res);
    this._backendService.members$.subscribe(res => this.members = res);
    this._backendService.topLangs$.subscribe(res => {
      const langs: Language[] = [];
      for (const lang of res) {
        langs.push(lang as Language);
      }
      this.topLangs = langs;
    });

    this._backendService.mostUsedTopics$.subscribe(res => this.mostUsedTopics = res);
    this._backendService.isDataLoaded$.subscribe(flag => this.isDataLoaded = flag);

    this._backendService.getReposList();
    this._backendService.getMembers();
  }

}
