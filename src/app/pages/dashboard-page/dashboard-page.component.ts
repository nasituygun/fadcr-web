import { Component } from '@angular/core';
import { ProjectInformation } from 'src/app/models/ProjectInformation';
import { AgentService } from 'src/app/services/agent/agent.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent {
  constructor(
    private agentService: AgentService
  ) {}

  ngOnInit() {
    this.getAllAgents();
  }

  currentAgentsInformation: ProjectInformation[] = [];
  private getAllAgents() {
    // this.agentService.getAllAgents().subscribe( result => {
    //   this.currentAgentsInformation = result;
    // });
  }

  addButtonClicked() {
    var smth: ProjectInformation = {
      readme: "If you read me, I'll help you",
      createdAt: "22.03.22",
      numberOfCommits: 102,
      owner: "Me&Myself",
      repoName: "Me&Myself&I"
    }

    this.currentAgentsInformation.push(smth)
    console.log(this.currentAgentsInformation)
  }


}
