import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HEADER_ACCEPT, Language, Member, RepoItem, RepoType, SortBy } from 'src/app/shared';
import { ENV_TOKEN, IEnvironment } from 'src/environments';
import { IBackendService } from './backend.serivce.interface';

@Injectable({
  providedIn: 'root'
})
export class BackendProdService implements IBackendService {

  private _repos = new BehaviorSubject<RepoItem[]>([]);
  repos$ = this._repos.asObservable();

  private _members = new BehaviorSubject<Member[]>([]);
  members$ = this._members.asObservable();

  private _topLangs = new BehaviorSubject<string[]>([]);
  topLangs$ = this._topLangs.asObservable();

  private _mostUsedTopics = new BehaviorSubject<string[]>([]);
  mostUsedTopics$ = this._mostUsedTopics.asObservable();

  private _isDataLoaded = new BehaviorSubject<boolean>(false);
  isDataLoaded$ = this._isDataLoaded.asObservable();

  searchKeywords = '';
  selectedLang!: Language;
  selectedRepoType!: RepoType;
  selectedSortBy!: SortBy;

  constructor(
    private _httpClient: HttpClient,
    @Inject(ENV_TOKEN) private _env: IEnvironment
  ) { }

  getReposList(): void {
    // TODO
  }

  getMembers(): void {
    // TODO
  }

  onLangSelected(lang: Language): void {
    // TODO
  }

  onRepoTypeSelected(repoType: RepoType): void {
    // TODO
  }

  onSortBySelected(sortBy: SortBy): void {
    // TODO
  }

  onSearch(keywords: string): void {
    // TODO
  }
}
