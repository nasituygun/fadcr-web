import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ProjectInformation } from 'src/app/models/ProjectInformation';
import { AgentService } from 'src/app/services/agent/agent.service';
import { MasterService } from 'src/app/services/master/master.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent {
  public isAgentsLoading: boolean = false;

  private isMasterConnected: boolean = false;

  constructor(
    private agentService: AgentService,
    private messageService: MessageService,
    private masterService: MasterService
  ) {}

  ngOnInit() {
    localStorage.clear();

    this.showError("Master");

    this.checkMasterConnection();
    this.getAllAgents();
  }

  currentAgentsInformation: ProjectInformation[] = [];
  private getAllAgents() {
    this.isAgentsLoading = true;
    const agentsObserver = {
      next: (projects: ProjectInformation[]) => {
        this.isAgentsLoading = true;
        this.currentAgentsInformation = projects;
      },
      error: (error: Error) => {
        this.isAgentsLoading = false;
        this.showError("Agent");
        this.currentAgentsInformation = [];
      },
      complete: () => {
        this.isAgentsLoading = false;
        console.log(this.currentAgentsInformation)
      }
    }

     this.agentService.getAllAgents().subscribe(agentsObserver);
  }

  checkMasterConnection() {
    this.masterService.tryToConnectBackend().subscribe(response => this.isMasterConnected = response);
    if(!this.isMasterConnected) {
      
      this.showError("Master");
    }
  }

  showError(serviceName: string) {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: `Couldn't connect to ${serviceName} Service!` });
  }

}
