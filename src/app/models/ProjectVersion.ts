import { ProjectVersionMethod } from "./ProjectVersionMethod";

export interface ProjectVersion {
    id: string
    name: string;
    createdAt: string;
    description: string;
    github: string;
    bugCatchger: string;
    promise: string;
    analysed: boolean;
}