import { Component, Inject, Input, OnInit } from '@angular/core';
import { Member } from 'src/app/shared';
import { ENV_TOKEN, IEnvironment } from 'src/environments';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  @Input() members!: Member[];

  constructor(
    @Inject(ENV_TOKEN) public env: IEnvironment
  ) { }

  ngOnInit(): void {
  }

}
