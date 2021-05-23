import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  fgFilter!: FormGroup;

  constructor(
    private _fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.fgFilter = this._fb.group({
      search: [''],
      type: [''],
      lang: [''],
      sort: ['']
    });
  }

}
