export interface IEnvironment {
    production: boolean;
    name: string;
    urlReposList: string;
    urlMembersList: string;
    urlPrefix: string;
    urlActivitySuffix: string;
    urlForksSuffix: string;
    urlStarsSuffix: string;
    urlIssuesSuffix: string;
    urlPullsSuffix: string;
    urlTopicPrefix: string;
    urlTopicSuffix: string;
    urlLangPrefix: string;
    urlPeople: string;

    authToken: string;
}