import { Component, Inject, Input, OnInit } from '@angular/core';
import { ENV_TOKEN, IEnvironment } from 'src/environments';

@Component({
  selector: 'app-most-used-topics',
  templateUrl: './most-used-topics.component.html',
  styleUrls: ['./most-used-topics.component.scss']
})
export class MostUsedTopicsComponent implements OnInit {

  @Input() topics!: string[];

  constructor(
    @Inject(ENV_TOKEN) public env: IEnvironment
  ) { }

  ngOnInit(): void {
  }

}
