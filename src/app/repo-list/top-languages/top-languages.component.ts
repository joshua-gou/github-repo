import { Component, Inject, Input, OnInit } from '@angular/core';
import { Language } from 'src/app/shared';
import { ENV_TOKEN, IEnvironment } from 'src/environments';

@Component({
  selector: 'app-top-languages',
  templateUrl: './top-languages.component.html',
  styleUrls: ['./top-languages.component.scss']
})
export class TopLanguagesComponent implements OnInit {

  @Input() langs!: Language[];

  constructor(
    @Inject(ENV_TOKEN) public env: IEnvironment
  ) { }

  ngOnInit(): void {
  }

}
