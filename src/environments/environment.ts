// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { IEnvironment } from "./environment.interface";

export const environment: IEnvironment = {
  production: false,
  name: 'dev',
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

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
