import { Component, Input } from '@angular/core';
import { ProjectInformation } from 'src/app/models/ProjectInformation';

@Component({
  selector: 'app-dashboard-project-card',
  templateUrl: './dashboard-project-card.component.html',
  styleUrls: ['./dashboard-project-card.component.css']
})
export class DashboardProjectCardComponent {

  @Input() agent!: ProjectInformation;
}
