import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { MasterService } from './services/master/master.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService]
})
export class AppComponent {
  title = 'fadcr-web';
  private isMasterConnected: boolean = false;

      
  constructor(
    private messageService: MessageService,
    private masterService: MasterService
  ) {}
  ngOnInit() {
    this.checkMasterConnection();
  }
  checkMasterConnection() {
    this.masterService.tryToConnectBackend().subscribe(response => this.isMasterConnected = response);
  
    if(!this.isMasterConnected) {
      this.showError("Master");
    }
  }

  showError(serviceName: string) {
    console.log(1111)

    this.messageService.add({ severity: 'error', summary: 'Error', detail: `Couldn't connect to ${serviceName} Service!` });
  }
}
