import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProjectInformation } from 'src/app/models/ProjectInformation';

@Injectable({
  providedIn: 'root'
})
export class ProjectRepoInformationService {

  constructor(private httpClient: HttpClient) { }

  private baseUrl: string = "http://3.87.189.110:8089/"

  getProjectInformation(projectName: string) {
    const response = this.httpClient.get<ProjectInformation>(this.baseUrl + "projectInformation/" + projectName)
    
    return response;
  }
}
