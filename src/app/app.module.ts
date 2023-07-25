import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardProjectCardComponent } from './components/dashboard-project-card/dashboard-project-card.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { AddProjectButtonComponent } from './components/add-project-button/add-project-button.component';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ProjectInfoPageComponent } from './pages/project-info-page/project-info-page.component';
import { VersionProfilePageComponent } from './pages/version-profile-page/version-profile-page.component';

import { ToastModule } from 'primeng/toast';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { MessageService } from 'primeng/api';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SplitterModule } from 'primeng/splitter';
import { ChartModule } from 'primeng/chart';
import { ProgressBarModule } from 'primeng/progressbar';
import { MultiSelectModule } from 'primeng/multiselect';
import { MetricNamesPipe } from './pipes/metric-names.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardProjectCardComponent,
    DashboardPageComponent,
    AddProjectButtonComponent,
    ProjectInfoPageComponent,
    VersionProfilePageComponent,
    MetricNamesPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    ToastModule,
    ProgressSpinnerModule,
    TableModule,
    ButtonModule,
    DropdownModule,
    RadioButtonModule,
    FormsModule,
    ReactiveFormsModule,
    SplitterModule,
    ChartModule,
    ProgressBarModule,
    MultiSelectModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
