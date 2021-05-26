export interface RepoItem {
    id: number;
    name: string;
    html_url: string;
    description: string;
    fork: boolean;
    stargazers_count: number;
    language: string;
    forks_count: number;
    archived: boolean;
    open_issues_count: number;
    license: {
        spdx_id: string;
    },
    topics: string[],
    pushed_at: string,
    mirror_url: string
}