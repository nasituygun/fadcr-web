export interface ProjectVersion {
    projectId: string;
    version: string;
    contributors: string[];
    startedOn: string;
    completedOn: string;
    numberOfCommits: number;
}