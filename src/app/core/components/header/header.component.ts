import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Language, LANGUAGES, RepoType, REPO_TYPES, SortBy, SORT_BY } from 'src/app/shared';
import { IBackendService } from '../../services/backend/backend.serivce.interface';
import { BACKEND_SERVICE_TOKEN } from '../../services/backend/backend.serivce.provider';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  fgFilter!: FormGroup;
  langs = LANGUAGES;
  repoTypes = REPO_TYPES;
  sortBy = SORT_BY;

  constructor(
    private _fb: FormBuilder,
    @Inject(BACKEND_SERVICE_TOKEN) private _backendService: IBackendService
  ) { }

  ngOnInit(): void {
    this.fgFilter = this._fb.group({
      search: [''],
      type: [''],
      lang: [''],
      sort: ['']
    });

    this.fgFilter.controls['type'].setValue(RepoType.All);
    this.fgFilter.controls['lang'].setValue(Language.All);
    this.fgFilter.controls['sort'].setValue(SortBy.LastUpdated);
  }

  onRepoTypeSelected(repoType: RepoType) {
    this._backendService.onRepoTypeSelected(repoType);
  }

  onLangSelected(lang: Language) {
    this._backendService.onLangSelected(lang);
  }

  onSortBySelected(sortBy: SortBy) {
    this._backendService.onSortBySelected(sortBy);
  }

  onSearch(keywords: string) {
    this._backendService.onSearch(keywords);
  }
}
