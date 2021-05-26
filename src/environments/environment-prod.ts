import { IEnvironment } from "./environment.interface";

export const environment: IEnvironment = {
  production: true,
  name: 'prod',
  urlReposList: 'https://api.github.com/users/decathlon/repos',
  urlMembersList: 'https://api.github.com/orgs/decathlon/members',
  urlPrefix: 'https://github.com/Decathlon/',
  urlActivitySuffix: '/graphs/participation?h=28&type=sparkline&w=155',
  urlForksSuffix: '/network/members',
  urlStarsSuffix: '/stargazers',
  urlIssuesSuffix: '/issues',
  urlPullsSuffix: '/pulls',
  urlTopicPrefix: 'https://github.com/search?q=topic:',
  urlTopicSuffix: '+org:Decathlon&type=Repositories',
  urlLangPrefix: 'https://github.com/Decathlon?language=',
  urlPeople: 'https://github.com/orgs/Decathlon/people',

  authToken: 'token [placeholder]',
};
