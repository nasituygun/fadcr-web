import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClassAnalysisMetrics } from 'src/app/models/ClassAnalysisMetrics';
import { FileAnalysisMetrics } from 'src/app/models/FileAnalysisMetrics';
import { GithubStats } from 'src/app/models/GithubStats';
import { ProjectVersion } from 'src/app/models/ProjectVersion';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  private masterBaseUrl: string = "http://3.87.189.110:8089/"

  constructor(private httpClient: HttpClient) { }

  tryToConnectBackend(): Observable<boolean> {
    const response = this.httpClient.get<boolean>(this.masterBaseUrl + "agent/active");
    
    return response;
  }

  getProjectVersionsAndMethods(agentId: string) {
    const response = this.httpClient.get<ProjectVersion[]>(this.masterBaseUrl + "agent/project/" + agentId);
    
    return response;
  }

  analyzeVersionWithMethod(agentId: string, version: string, method: string) {
    const response = this.httpClient.get<any>(this.masterBaseUrl + `analyze/project_info/${agentId}/${version}/${method}`);
    
    return response;
  }

  getClassAnalysisForVersionAndMethodByPaging(agentId: string, version: string, method: string, page: number, size: number = 100) {
    const response = this.httpClient.get<ClassAnalysisMetrics[]>(this.masterBaseUrl + `analyze/project_info/result/${agentId}/${version}/${method}/page=${page}/size=${size}`);
    
    return response;
  }

  getFileAnalysisForVersionAndMethodByPaging(agentId: string, version: string, method: string, page: number, size: number = 100) {
    const response = this.httpClient.get<FileAnalysisMetrics[]>(this.masterBaseUrl + `analyze/project_info/result/file/${agentId}/${version}/${method}/page=${page}/size=${size}`);
    
    return response;
  }

  getGithubStats(agentId: string): Observable<GithubStats> {
    const response = this.httpClient.get<GithubStats>(this.masterBaseUrl + `agent/stats/${agentId}`);
    
    return response;
  }

  getAnalyzedVersions(agentId: string): Observable<ProjectVersion[]> {
    const response = this.httpClient.get<ProjectVersion[]>(this.masterBaseUrl + `agent/project/analyzed/${agentId}`);
    
    return response;
  }

  getClassCompare(body: string): Observable<ClassAnalysisMetrics[]> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    const response = this.httpClient.post<ClassAnalysisMetrics[]>(this.masterBaseUrl + `project/compare`, body, httpOptions);
    
    return response;
  }

  getFileCompare(body: string): Observable<FileAnalysisMetrics[]> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    const response = this.httpClient.post<FileAnalysisMetrics[]>(this.masterBaseUrl + `project/compare/file`, body, httpOptions);
    
    return response;
  }
}
