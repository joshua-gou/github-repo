import { Component, Inject, Input, OnInit } from '@angular/core';
import { Language, RepoItem } from 'src/app/shared';
import { ENV_TOKEN, IEnvironment } from 'src/environments';

@Component({
  selector: 'app-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.scss']
})
export class BottomBarComponent implements OnInit {
  @Input()
  get repo(): RepoItem {
    return this._repo;
  }
  set repo(repo: RepoItem) {
    this._repo = repo;
    this.lang = repo.language as Language;
  }
  private _repo!: RepoItem;
  lang!: Language;

  constructor(
    @Inject(ENV_TOKEN) public env: IEnvironment
  ) { }

  ngOnInit(): void {
  }

}
