import { Component, Input, OnInit } from '@angular/core';
import { Language } from '../../common/enums';

@Component({
  selector: 'app-language-tag',
  templateUrl: './language-tag.component.html',
  styleUrls: ['./language-tag.component.scss']
})
export class LanguageTagComponent implements OnInit {

  @Input() lang!: Language;
  constructor() { }

  ngOnInit(): void {
  }

}
