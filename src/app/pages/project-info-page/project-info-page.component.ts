import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectInformation } from 'src/app/models/ProjectInformation';
import { ProjectVersion } from 'src/app/models/ProjectVersion';
import { MasterService } from 'src/app/services/master/master.service';
import { ProjectRepoInformationService } from 'src/app/services/project-repo-information/project-repo-information.service';

@Component({
  selector: 'app-project-info-page',
  templateUrl: './project-info-page.component.html',
  styleUrls: ['./project-info-page.component.css']
})
export class ProjectInfoPageComponent {
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private projectRepoInformationService: ProjectRepoInformationService,
    private masterService: MasterService
  ) { }

  ngOnInit() {
    if(localStorage.getItem("project")) {
      this.project = JSON.parse(localStorage.getItem("project")!)
      
      this.versionsLoading = true;
      console.log(this.project['id'])
      this.masterService.getProjectVersionsAndMethods(this.project.id).subscribe(response => {
        this.projectVersionsAndMethods = response;
        console.log(this.projectVersionsAndMethods)
        this.versionList = [];
        for(let projectVersion of this.projectVersionsAndMethods) {
          this.versionList.push(
            {
              versionValue: projectVersion.name,
              versionDescription: projectVersion.description,
              versionDate: projectVersion.createdAt,
              methods: [
                {methodName: "Github", methodStatus: this.toTitleCase(projectVersion.github)},
                {methodName: "Promise", methodStatus: this.toTitleCase(projectVersion.promise)},
                {methodName: "BugCatcher", methodStatus: this.toTitleCase(projectVersion.bugCatchger)}
              ]
            });
        }

        this.versionsLoading = false;
      })
    }
    this.repoName = this.activatedRoute.snapshot.paramMap.get('projectName')!;

    this.formGroup = new FormGroup({
      selectedCategory: new FormControl()
    });
    console.log(this.formGroup)
  }

  public repoName!: string;
  public project!: ProjectInformation;

  public versionsLoading: boolean = true;
  public versionList: { versionValue: string; versionDescription: string; versionDate: string, methods: { methodName: string, methodStatus: string }[] }[] = [{versionValue: "", versionDescription: "", versionDate: "", methods: []}];
  private projectVersionsAndMethods!: ProjectVersion[];
  public formGroup!: FormGroup;

  public selectedVersion: string | undefined;
  public selectedMethod: string | undefined;

  public toTitleCase(text: string) {
    let wordsOfText: string[] = [];
    let titledText: string = "";

    wordsOfText = text.split(" ");
    wordsOfText.forEach(word => {
      if (titledText.length == 0) {
        titledText = titledText + word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
      }
      else {
        titledText = titledText + " " + word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
      }
    })
    
    return titledText;
  }

  public analyzeVersion() {
    if (this.selectedVersion && this.selectedMethod) {
      this.redirectToVersionProfilePage();
    }
  }

  public selectMethodAndVersion(version: string, method: string) {
    this.selectedVersion = version;
    this.selectedMethod = method;
  }

  private redirectToVersionProfilePage() {
    let url = `/version-profile/${this.repoName}/${this.selectedVersion?.replaceAll("/", "\\")}/${this.selectedMethod}`;
    this.router.navigateByUrl(url);
  }

  public deselectVersionAndMethod() {
    this.selectedVersion = undefined;
    this.selectedMethod = undefined;
  }
}
