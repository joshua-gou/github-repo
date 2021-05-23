import { Component, OnInit } from '@angular/core';
import { Language } from 'src/app/shared';

@Component({
  selector: 'app-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.scss']
})
export class BottomBarComponent implements OnInit {
  lang!: Language;

  constructor() { }

  ngOnInit(): void {
    this.lang = Language.HTML;
  }

}
