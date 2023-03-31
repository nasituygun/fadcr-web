import { Component } from '@angular/core';
import { faChartLine, faHome, faPowerOff, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  faHome = faHome;
  faSearch = faSearch;
  faPowerOff = faPowerOff;
  faChartLine = faChartLine;
}
