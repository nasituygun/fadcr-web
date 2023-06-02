import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ProjectInformation } from 'src/app/models/ProjectInformation';

@Component({
  selector: 'app-dashboard-project-card',
  templateUrl: './dashboard-project-card.component.html',
  styleUrls: ['./dashboard-project-card.component.css']
})
export class DashboardProjectCardComponent {

  constructor(
    private router: Router,
    private messageService: MessageService
  ) {
    
  }
  @Input() agent!: ProjectInformation;

  getProjectInfo() {
    if(this.agent.online) {
      this.redirectToProjectInfoPage(this.agent.repositoryName);
    }
    else {
      this.messageService.add({ severity: 'warn', summary: 'Warn', detail: `Agent for ${this.agent.repositoryName} is not online!` });
    }
  }

  private redirectToProjectInfoPage(projectName: string) {
    localStorage.setItem("project", JSON.stringify(this.agent))
    let url = `/project-info/${projectName}`;
    this.router.navigateByUrl(url);
  }
}
