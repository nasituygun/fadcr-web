import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { ProjectInformation } from 'src/app/models/ProjectInformation';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  constructor(private httpClient: HttpClient) { }

  private apiBaseUrl: string = "http://3.87.189.110:8089/api/v1/agent/"


  getAllAgents(): Observable<ProjectInformation[]> {
    const response = this.httpClient.get<ProjectInformation[]>(this.apiBaseUrl + "active");

    return response;
  }

}
