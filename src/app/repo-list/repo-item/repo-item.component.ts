import { Component, Inject, Input, OnInit } from '@angular/core';
import { RepoItem } from 'src/app/shared';
import { ENV_TOKEN, IEnvironment } from 'src/environments';

@Component({
  selector: 'app-repo-item',
  templateUrl: './repo-item.component.html',
  styleUrls: ['./repo-item.component.scss']
})
export class RepoItemComponent implements OnInit {

  @Input() repo!: RepoItem;

  constructor(
    @Inject(ENV_TOKEN) public env: IEnvironment
  ) { }

  ngOnInit(): void {
  }

}
