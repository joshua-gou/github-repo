import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Count, HEADER_ACCEPT, Language, Member, RepoItem, RepoType, SortBy } from 'src/app/shared';
import { ENV_TOKEN, IEnvironment } from 'src/environments';
import { IBackendService } from './backend.serivce.interface';

@Injectable({
  providedIn: 'root'
})
export class BackendService implements IBackendService {

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
    this._isDataLoaded.next(false);

    this._httpClient.get<RepoItem[]>(
      this._env.urlReposList,
      {
        headers: new HttpHeaders({
          Authorization: this._env.authToken,
          Accept: HEADER_ACCEPT
        }),
      }
    ).pipe(
      tap(res => {
        const countLangs: Count[] = [];
        const countTopics: Count[] = [];

        for (const repo of res) {
          if (!repo.language) {
            continue;
          }

          const existingCount = countLangs.find(item => item.name === repo.language);
          if (existingCount) {
            existingCount.count += 1;
            continue;
          }
          countLangs.push({
            name: repo.language,
            count: 1
          });
        }

        this._topLangs.next(
          countLangs.sort((a, b) => b.count - a.count).slice(0, 5)
            .map(item => {
              return item.name;
            })
        );

        for (const repo of res) {
          for (const topic of repo.topics) {
            const existingCount = countTopics.find(item => item.name === topic);
            if (existingCount) {
              existingCount.count += 1;
              continue;
            }

            countTopics.push({
              name: topic,
              count: 1
            });
          }
        }

        this._mostUsedTopics.next(
          countTopics.sort((a, b) => b.count - a.count).slice(0, 5)
            .map(topic => {
              return topic.name;
            })
        );
      })).subscribe(res => {
        res.sort((a, b) => (new Date(b.pushed_at)).getTime() - (new Date(a.pushed_at)).getTime());

        if (this.searchKeywords.length > 0) {
          res = res.filter(repo => repo.name.toLocaleLowerCase().indexOf(this.searchKeywords.toLocaleLowerCase()) > -1);
        }

        if (this.selectedLang && this.selectedLang !== Language.All) {
          res = res.filter(repo => repo.language === this.selectedLang);
        }

        if (this.selectedRepoType && this.selectedRepoType !== RepoType.All) {
          switch (this.selectedRepoType) {
            case RepoType.Archived:
              res = res.filter(repo => repo.archived);
              break;
            case RepoType.Forks:
              res = res.filter(repo => repo.fork);
              break;
            case RepoType.Mirrors:
              res = res.filter(repo => repo.mirror_url);
              break;
            case RepoType.Sources:
              res = res.filter(repo => !repo.fork);
              break;
            default:
              break;
          }
        }

        if (this.selectedSortBy) {
          switch (this.selectedSortBy) {
            case SortBy.LastUpdated:
              res.sort((a, b) => (new Date(b.pushed_at)).getTime() - (new Date(a.pushed_at)).getTime());
              break;
            case SortBy.Name:
              res.sort((a, b) => b.name.localeCompare(a.name));
              break;
            case SortBy.Stars:
              res.sort((a, b) => b.stargazers_count - a.stargazers_count);
              break;
            default:
              break;
          }

        }
        this._repos.next(res);

        this._isDataLoaded.next(true)
      });
  }

  getMembers(): void {
    this._httpClient.get<Member[]>(
      this._env.urlMembersList,
      {
        headers: new HttpHeaders(
          {
            Authorization: this._env.authToken,
            Accept: HEADER_ACCEPT
          }
        )
      }
    ).subscribe(res => {
      this._members.next(res);
    });
  }

  onLangSelected(lang: Language): void {
    this.selectedLang = lang;
    this.getReposList();
  }

  onRepoTypeSelected(repoType: RepoType): void {
    this.selectedRepoType = repoType;
    this.getReposList();
  }

  onSortBySelected(sortBy: SortBy): void {
    this.selectedSortBy = sortBy;
    this.getReposList();
  }

  onSearch(keywords: string): void {
    this.searchKeywords = keywords;
    this.getReposList();
  }
}
