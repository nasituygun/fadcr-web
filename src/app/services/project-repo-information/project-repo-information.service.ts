import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProjectInformation } from 'src/app/models/ProjectInformation';

@Injectable({
  providedIn: 'root'
})
export class ProjectRepoInformationService {

  constructor(private httpClient: HttpClient) { }

  private baseUrl: string = "https://rocky-eyrie-41900-8f3b64454724.herokuapp.com/"

  getProjectInformation(projectName: string) {
    const response = this.httpClient.get<ProjectInformation>(this.baseUrl + "projectInformation/" + projectName)
    
    return response;
  }
}
