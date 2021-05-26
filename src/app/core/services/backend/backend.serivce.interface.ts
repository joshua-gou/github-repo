import { Observable } from "rxjs";
import { Language, Member, RepoItem, RepoType, SortBy } from "src/app/shared";

export interface IBackendService {
    repos$: Observable<RepoItem[]>;
    members$: Observable<Member[]>;
    topLangs$: Observable<string[]>;
    mostUsedTopics$: Observable<string[]>;

    searchKeywords: string;
    selectedLang: Language;
    selectedRepoType: RepoType;
    selectedSortBy: SortBy;
    isDataLoaded$: Observable<boolean>;

    getReposList(): void;
    getMembers(): void;
    onLangSelected(lang: Language): void;
    onRepoTypeSelected(repoType: RepoType): void;
    onSortBySelected(sortBy: SortBy): void;
    onSearch(keywords: string): void;
}