export interface GithubStats {
    numberOfCommit: number;
    numberOfVersion: number;
    numberOfAnalyzedVersion: number;
    numberOfUnanalyzedVersion: number;
    analyzedVersionPercentage: number;
    unanalyzedVersionPercentage: number;
    numberOfOpenIssue: number;
    numberOfClosedIssue: number;
}