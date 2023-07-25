import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProjectInformation } from 'src/app/models/ProjectInformation';

@Injectable({
  providedIn: 'root'
})
export class ProjectRepoInformationService {
  constructor(private httpClient: HttpClient) { }

  private baseUrl: string = "https://blooming-ravine-57013-e6c21f1a89db.herokuapp.com/"

  getProjectInformation(projectName: string) {
    const response = this.httpClient.get<ProjectInformation>(this.baseUrl + "projectInformation/" + projectName)

    return response;
  }
}
