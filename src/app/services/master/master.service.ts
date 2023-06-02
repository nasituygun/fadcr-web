import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectVersion } from 'src/app/models/ProjectVersion';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  private masterBaseUrl: string = "http://localhost:8089/"

  constructor(private httpClient: HttpClient) { }

  tryToConnectBackend(): Observable<boolean> {
    const response = this.httpClient.get<boolean>(this.masterBaseUrl + "api/v1/agent/active");
    
    return response;
  }

  getProjectVersionsAndMethods(agentId: string) {
    const response = this.httpClient.get<ProjectVersion[]>(this.masterBaseUrl + "api/v1/agent/project/" + agentId);
    
    return response;
  }

  analyzeVersionWithMethod(agentId: string, version: string, method: string) {
    const response = this.httpClient.get<any>(this.masterBaseUrl + `api/v1/analyze/project_info/${agentId}/${version}/${method}`);
    
    return response;
  }
}
