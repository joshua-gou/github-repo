import { Language, RepoType, SortBy } from "./enums";

export const LANGUAGES: string[] = (() => {
    return Object.entries(Language)
        .map(lang => {
            const [_, value] = lang;
            return value;
        });
})();

export const REPO_TYPES: string[] = (() => {
    return Object.entries(RepoType)
        .map(repoType => {
            const [_, value] = repoType;
            return value;
        });
})();

export const SORT_BY: string[] = (() => {
    return Object.entries(SortBy)
        .map(entry => {
            const [_, value] = entry;
            return value;
        });
})();

export const HEADER_ACCEPT: string = 'application/vnd.github.mercy-preview+json';