import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { ProjectInfoPageComponent } from './pages/project-info-page/project-info-page.component';
import { VersionProfilePageComponent } from './pages/version-profile-page/version-profile-page.component';

const routes: Routes = [
  {path: "", component: DashboardPageComponent},
  {path: "dashboard", component: DashboardPageComponent},
  {path: "project-info/:projectName", component: ProjectInfoPageComponent},
  {path: "version-profile/:projectName/:releaseVersion/:analyzeMethod", component: VersionProfilePageComponent},
  {path: "dashboard", component: DashboardPageComponent},
  {path: "**", component: DashboardPageComponent}  
];

const routerOptions: ExtraOptions = {
  onSameUrlNavigation: 'reload'
}

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
