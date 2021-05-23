import { Component, OnInit } from '@angular/core';
import { Language } from 'src/app/shared';

@Component({
  selector: 'app-top-languages',
  templateUrl: './top-languages.component.html',
  styleUrls: ['./top-languages.component.scss']
})
export class TopLanguagesComponent implements OnInit {

  langs!: Language[];

  constructor() { }

  ngOnInit(): void {
    this.langs = [
      Language.TypeScript,
      Language.Kotlin,
      Language.Shell,
      Language.Python,
      Language.Ruby
    ];
  }

}
