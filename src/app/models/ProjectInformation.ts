export interface ProjectInformation {
    id: string;
    owner: string;
    repositoryName: string;
    about: string;
    numberOfContributor: number;
    watchers: number;
    topics: string[];
    license: {
      key: string;
      name: string;
      url: string;
      allow_forking: boolean;
    },
    visibility: string;
    forks_count: number;
    star_count: number;
    default_branch: string;
    homepage: string;
    online: boolean;
}