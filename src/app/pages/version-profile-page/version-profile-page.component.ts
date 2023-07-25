import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClassAnalysisMetrics } from 'src/app/models/ClassAnalysisMetrics';
import { GithubStats } from 'src/app/models/GithubStats';
import { ProjectInformation } from 'src/app/models/ProjectInformation';
import { MasterService } from 'src/app/services/master/master.service';
import classMetricsDictionary from '../../pipes/metrics.json';
import fileMetricsDictionary from '../../pipes/fileMetrics.json';

import { MessageService } from 'primeng/api';
import { ProjectCompareBody } from 'src/app/models/ProjectCompareBody';
import { RadarChart } from 'src/app/models/RadarChart';
import { FileAnalysisMetrics } from 'src/app/models/FileAnalysisMetrics';

interface MetricDictionary {
    title: string;
    code: string
  }
@Component({
  selector: 'app-version-profile-page',
  templateUrl: './version-profile-page.component.html',
  styleUrls: ['./version-profile-page.component.css']
})
export class VersionProfilePageComponent {
  public classes: string[] = [];
  public files: string[] = ["JavaxMoneyOrder.java",
  "ConstraintValidationProcessor.java",
  "AnnotationParametersValidationIT.java",
  "AnnotationTypeValidationIT.java",
  "CircularNestedTypesIT.java",
  "ConstraintValidationProcessorIT.java",
  "ConstraintValidationProcessorITBase.java",
  "GroupSequenceValidationIT.java",
  "ValidationExtension.java",
  "HibernateValidatorConfigurationTest.java",
  "AnnotationDef, A extends Annotation>.java",
  "ConstraintDef, A extends Annotation>.java",
  "GenericConstraintDef.java",
  "RegexpURLValidator.java",
  "AbstractMessageInterpolator.java",
  "ParameterMessageInterpolator.java",
  "ResourceBundleMessageInterpolator.java",
  "ParanamerParameterNameProvider.java",
  "ReflectionParameterNameProvider.java",
  "AggregateResourceBundle.java",
  "AggregateResourceBundleLocator.java",
  "CachingResourceBundleLocator.java",
  "DelegatingResourceBundleLocator.java",
  "PlatformResourceBundleLocator.java",
  "AggregateResourceBundleTest.java",
  "ConstraintValidatorInitializationHelper.java",
  "ValidatorUtil.java",
  "Customer.java",
  "Event.java",
  "ExampleConstraintValidatorFactory.java",
  "Order.java",
  "RetailOrder.java",
  "HibernateValidator.java",
  "HibernateValidatorPermission.java",
  "PredefinedScopeHibernateValidator.java",
  "ValidationMessages.java",
  "MyBean.java",
  "ValidNumberValidator.java",
  "ValidNameValidator.java",
  "Bean.java",
  "MustMatchValidator.java",
  "Event$EventLocation.java",
  "ExternalClassLoaderJavaxMoneyServiceProvider.java",
  "AbstractArquillianIT.java"];
  public classMetrics: ClassAnalysisMetrics[] = [];
  public fileMetrics: FileAnalysisMetrics[] = [];


  public classMetricsDictionary: MetricDictionary[] = [];
  public fileMetricsDictionary: MetricDictionary[] = [];


  public longFormOfFileMetrics: string[] = ["Comment Lines of Code", "Logical Lines of Code", "Lines of Code", "Clone Coverage", "Private Data Access", "Public Undocumented APIs"];
  public selectedClassMetrics!: MetricDictionary[];
  public selectedFileMetrics!: MetricDictionary[];
  public selectedMethodClassMetrics!: string[];

  public selectedAnalyzeMethod!: string;
  public project!: ProjectInformation;
  public isAnalysisLoading: boolean = false;
  public selectedFile!: string;

  public selectedClasses!: string[];
  public selectedReleaseVersion!: string;
  public githubStats!: GithubStats;

  private agentId: string = ""; 
  repoName!: string;
  public releaseVersion!: string;
  public analysedVersions!: string[];

  public classDatasetsToBe!: any[];

  public selectedClassInComparison!: string;
  public selectedFileInComparison!: string;
  public selectedClassAndVersionComparionsDataForChart: any;

  public isGithubStaticsLoaded: boolean = false;
  public isClassMetricsLoaded: boolean = false;
  public isFileMetricsLoaded: boolean = false;
  public isAnalyzedVersionsLoaded: boolean = false;

  data: any;
  basicData: any;
  data1: any;
  classData!: RadarChart;
  fileData!: RadarChart;
  public barData1 = {
    labels: ["Comment Lines of Code", "Logical Lines of Code"],
    datasets: [
        {
            label: 'Event',
            data: [6, 197],
            backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)'],
            borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)'],
            borderWidth: 1
        }
    ]
}
  public barData2 = {
    labels: ["Comment Lines of Code", "Logical Lines of Code", "Private Data Access"],
    datasets: [
        {
            label: 'Event',
            data: [6, 197, 4],
            backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)'],
            borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)'],
            borderWidth: 1
        }
    ]
}

  options: any;
  basicOptions: any;
  options1: any;


  public currentClassAverageData!: ClassAnalysisMetrics;
  public selectedClassAverageData!: ClassAnalysisMetrics;

  public currentFileAverageData!: FileAnalysisMetrics;
  public selectedFileAverageData!: FileAnalysisMetrics;

  private documentStyle = getComputedStyle(document.documentElement);

  constructor(
    private activatedRoute: ActivatedRoute,
    private masterService: MasterService,
    public messageService: MessageService
  ) {
    
  }
  ngOnInit() {
    this.repoName = this.activatedRoute.snapshot.paramMap.get('projectName')!;
    this.releaseVersion = this.activatedRoute.snapshot.paramMap.get('releaseVersion')!.replaceAll("\\", "/");
    this.selectedAnalyzeMethod = this.activatedRoute.snapshot.paramMap.get('analyzeMethod')!;
    this.project = JSON.parse(localStorage.getItem("project")!);
    this.agentId = this.project.id;

    this.saveClassMetricsDictionary();
    this.saveFileMetricsDictionary();


    this.isAnalysisLoading = true;    

    this.getClassAnalysis();
    this.getFileAnalysis();
    this.getGithubStatistics();
    this.getAnalyzedVersions();

    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    
    this.options = {
        plugins: {
            legend: {
                labels: {
                    color: textColor
                }
            }
        },
        scales: {
            r: {
                grid: {
                    color: textColorSecondary
                },
                pointLabels: {
                    color: textColorSecondary
                }
            }
        }
    };

    const documentStyle1 = getComputedStyle(document.documentElement);
    const textColor1 = documentStyle1.getPropertyValue('--text-color');
    const textColorSecondary1 = documentStyle1.getPropertyValue('--text-color-secondary');
    const surfaceBorder1 = documentStyle1.getPropertyValue('--surface-border');

    //this.fillRadarChartWithData();

    this.basicData = {
        labels: ["Comment Lines of Code", "Logical Lines of Code", "Private Data Access"],
        datasets: [
            {
                label: 'ProgrammaticContainerElementConstraintsForFieldTest',
                data: [6, 197, 4],
                backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
                borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
                borderWidth: 1
            }
        ]
    };
    this.basicOptions = {
        plugins: {
            legend: {
                labels: {
                    color: textColor
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: documentStyle.getPropertyValue('--surface-border'),
                    drawBorder: false
                }
            },
            x: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: documentStyle.getPropertyValue('--surface-border'),
                    drawBorder: false
                }
            }
        }
    };


    this.options1 = {
        maintainAspectRatio: false,
        aspectRatio: 0.6,
        plugins: {
            legend: {
                labels: {
                    color: textColor1
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: textColorSecondary1
                },
                grid: {
                    color: surfaceBorder1
                }
            },
            y: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder1
                }
            }
        }
    };

    this.isAnalysisLoading = false;

  }
  
  refreshChart() {
    this.data.datasets[1].label = this.selectedAnalyzeMethod;   
  }

  fillSelectedClassesData() {
    this.classDatasetsToBe = [];
    for(let selectedClass of this.selectedClasses) {
        //this.fillRadarChartWithData();
    }

  }

  async getClassAnalysis() {
    let pageIndex: number = 0;
    
    while(pageIndex != 3) {
        try {
            this.masterService.getClassAnalysisForVersionAndMethodByPaging(this.agentId, this.releaseVersion, this.selectedAnalyzeMethod, pageIndex).subscribe(
                response => {
                    this.manageClassNames(response)
                    this.saveClassMetrics(response);
                }
            )
            pageIndex++;
        } catch (error) {
            console.log(error)
        }
    }
    this.isClassMetricsLoaded = true;
  }

  async getFileAnalysis() {
    let pageIndex: number = 0;
    
    while(pageIndex != 3) {
        try {
            this.masterService.getFileAnalysisForVersionAndMethodByPaging(this.agentId, this.releaseVersion, this.selectedAnalyzeMethod, pageIndex).subscribe(
                response => {
                    console.log(response)
                    this.manageFileNames(response)
                    this.saveFileMetrics(response);
                }
            )
            pageIndex++;
        } catch (error) {
            console.log(error)
        }
    }
    this.isClassMetricsLoaded = true;
  }

  manageClassNames(classAnalysis: ClassAnalysisMetrics[]) {
    for(let classMetric of classAnalysis) {
        this.classes.push(classMetric.name);
    }
  }

  manageFileNames(fileAnalysis: FileAnalysisMetrics[]) {
    for(let fileMetric of fileAnalysis) {
        this.classes.push(fileMetric.fileName);
    }
  }

  saveClassMetrics(classMetrics: ClassAnalysisMetrics[]) {
    for(let classMetric of classMetrics) {
        this.classMetrics.push(classMetric)
    }
  }

  saveFileMetrics(fileMetrics: FileAnalysisMetrics[]) {
    for(let fileMetric of fileMetrics) {
        this.fileMetrics.push(fileMetric)
    }
  }

  getGithubStatistics() {
     this.masterService.getGithubStats(this.agentId).subscribe(response => {
        this.githubStats = response;
        this.isGithubStaticsLoaded = true;
     })
  }

  saveClassMetricsDictionary() {

    this.classMetricsDictionary = [];
    for(let [key, value] of Object.entries(classMetricsDictionary)) {
        this.classMetricsDictionary.push(
            {
                title: value,
                code: key
            }
        )
    }
}

saveFileMetricsDictionary() {
    this.fileMetricsDictionary = [];
    for(let [key, value] of Object.entries(fileMetricsDictionary)) {
        this.fileMetricsDictionary.push(
            {
                title: value,
                code: key
            }
        )
    }

    console.log(fileMetricsDictionary)
}


  printSelected(text:any) {
    console.log(text)
  }

  fillVersionClassMetricComparisonData() {
    //let selectedTitles = this.getTitlesFromMetricDictionary()
    if(this.selectedClassMetrics.length > 2 && this.selectedClassMetrics.length < 6) {
        this.getDataOfMetric("ldc", this.classMetrics[0])
        this.classData = {
            labels: [],
            datasets: []
        };

        this.classData.labels = this.getTitlesFromMetricDictionary(this.selectedClassMetrics);
        this.classData.datasets.push(
            {
                label: this.selectedClassInComparison,
                borderColor: this.getColorForDataIndex(0),
                pointBackgroundColor: this.getColorForDataIndex(0),
                pointBorderColor: this.getColorForDataIndex(0),
                pointHoverBackgroundColor: this.getColorForDataIndex(0),
                pointHoverBorderColor: this.getColorForDataIndex(0),
                data: this.getMetricValuesOfClass(this.getCodesFromMetricDictionary(this.selectedClassMetrics), this.getAnalysisFieldFromClassArray(this.selectedClassInComparison, this.classMetrics))
            },
            {
                label: "Average",
                borderColor: this.getColorForDataIndex(1),
                pointBackgroundColor: this.getColorForDataIndex(1),
                pointBorderColor: this.getColorForDataIndex(1),
                pointHoverBackgroundColor: this.getColorForDataIndex(1),
                pointHoverBorderColor: this.getColorForDataIndex(1),
                data: this.getMetricValuesOfClass(this.getCodesFromMetricDictionary(this.selectedClassMetrics),  this.currentClassAverageData)
            },
            {
                label: this.selectedClassAverageData.name + "-Average",
                borderColor: this.getColorForDataIndex(2),
                pointBackgroundColor: this.getColorForDataIndex(2),
                pointBorderColor: this.getColorForDataIndex(2),
                pointHoverBackgroundColor: this.getColorForDataIndex(2),
                pointHoverBorderColor: this.getColorForDataIndex(2),
                data: this.getMetricValuesOfClass(this.getCodesFromMetricDictionary(this.selectedClassMetrics),  this.selectedClassAverageData)
            }
        )
    }
    else if(this.selectedClassMetrics.length >= 6) {
        console.log("WARN TO BE")
        this.messageService.add({ severity: 'warn', summary: 'Warn', detail: "Selected metricsa amount should be between 2 and 5" });
    }
  }

  fillVersionFileMetricComparisonData() {
    if(this.selectedFileMetrics.length > 2 && this.selectedFileMetrics.length < 6) {
        this.fileData = {
            labels: [],
            datasets: []
        };

        this.fileData.labels = this.getTitlesFromMetricDictionary(this.selectedFileMetrics);
        this.fileData.datasets.push(
            {
                label: this.selectedFileInComparison,
                borderColor: this.getColorForDataIndex(0),
                pointBackgroundColor: this.getColorForDataIndex(0),
                pointBorderColor: this.getColorForDataIndex(0),
                pointHoverBackgroundColor: this.getColorForDataIndex(0),
                pointHoverBorderColor: this.getColorForDataIndex(0),
                data: this.getMetricValuesOfFile(this.getCodesFromMetricDictionary(this.selectedFileMetrics), this.getAnalysisFieldFromFileArray(this.selectedFileInComparison, this.fileMetrics))
            },
            {
                label: "Average",
                borderColor: this.getColorForDataIndex(1),
                pointBackgroundColor: this.getColorForDataIndex(1),
                pointBorderColor: this.getColorForDataIndex(1),
                pointHoverBackgroundColor: this.getColorForDataIndex(1),
                pointHoverBorderColor: this.getColorForDataIndex(1),
                data: this.getMetricValuesOfFile(this.getCodesFromMetricDictionary(this.selectedFileMetrics),  this.currentFileAverageData)
            },
            {
                label: this.selectedFileAverageData.fileName + "-Average",
                borderColor: this.getColorForDataIndex(2),
                pointBackgroundColor: this.getColorForDataIndex(2),
                pointBorderColor: this.getColorForDataIndex(2),
                pointHoverBackgroundColor: this.getColorForDataIndex(2),
                pointHoverBorderColor: this.getColorForDataIndex(2),
                data: this.getMetricValuesOfFile(this.getCodesFromMetricDictionary(this.selectedFileMetrics),  this.selectedFileAverageData)
            }
        )

        console.log(this.fileData)
    }
    else if(this.selectedFileMetrics.length >= 6) {
        console.log("WARN TO BE")
        this.messageService.add({ severity: 'warn', summary: 'Warn', detail: "Selected metrics amount should be between 2 and 5" });
    }
  }

  getMetricValuesOfClass(metricsToSearch: string[], arrayToSearch: ClassAnalysisMetrics) {
    let values: number[] = [];
    console.log(arrayToSearch)
    for(let metricToSearch of metricsToSearch) {
        for(let metric of Object.entries(arrayToSearch)) {
            if (metricToSearch == metric[0]) values.push(metric[1]);
        }
    }
    return values
  }

  getMetricValuesOfFile(metricsToSearch: string[], arrayToSearch: FileAnalysisMetrics) {
    let values: number[] = [];
    console.log(metricsToSearch)
    for(let metricToSearch of metricsToSearch) {
        for(let metric of Object.entries(arrayToSearch)) {
            if (metricToSearch == metric[0]) values.push(metric[1]);
        }
    }
    return values
  }

  getAnalysisFieldFromClassArray(fieldNameToSearch: string, arrayToSearch: any[]) {
    for(let entity of arrayToSearch) {
        if(entity.name == fieldNameToSearch) return entity;
    }
  }

  getAnalysisFieldFromFileArray(fieldNameToSearch: string, arrayToSearch: any[]) {
    console.log(arrayToSearch)
    for(let entity of arrayToSearch) {
        if(entity.fileName == fieldNameToSearch) return entity;
    }
  }

  getCodesFromMetricDictionary(dictionary: MetricDictionary[]) {
    let codes: string[] = [];

    for(let field of dictionary) {
        codes.push(field.code)
    }

    return codes
  }

  getTitlesFromMetricDictionary(dictionary: MetricDictionary[]) {
    let titles: string[] = [];

    for(let field of dictionary) {
        titles.push(field.title)
    }

    return titles
  }

  fillRadarChartWithData(label: string, dataArray: number[], arrayToFill: any[], dataIndex: number) {
    
    arrayToFill.push(
        {
            type: 'line',
            label: label,
            borderColor: this.getColorForDataIndex(dataIndex),
            borderWidth: 2,
            fill: false,
            tension: 0.5,
            data: dataArray
        }
    )
  }

  prepareVersionComparisonChart(selectedMetrics: string[], selectedVersionName: string, selectedClass: string) {
    this.selectedClassAndVersionComparionsDataForChart = {
        labels: selectedMetrics,
        datasets: [
            {
                label: selectedClass,
                borderColor: this.getColorForDataIndex(0),
                pointBackgroundColor: this.getColorForDataIndex(0),
                pointBorderColor: this.getColorForDataIndex(0),
                pointHoverBackgroundColor: this.getColorForDataIndex(0),
                pointHoverBorderColor: this.getColorForDataIndex(0),
                data: [584, 1, 4735]
            },
            {
                label: this.releaseVersion + "-Average",
                borderColor: this.getColorForDataIndex(1),
                pointBackgroundColor: this.getColorForDataIndex(1),
                pointBorderColor: this.getColorForDataIndex(1),
                pointHoverBackgroundColor: this.getColorForDataIndex(1),
                pointHoverBord1erColor: this.getColorForDataIndex(1),
                data: [4, 971, 2735]
            },
            {
                label: selectedVersionName + "-Average",
                borderColor: this.getColorForDataIndex(2),
                pointBackgroundColor: this.getColorForDataIndex(2),
                pointBorderColor: this.getColorForDataIndex(2),
                pointHoverBackgroundColor: this.getColorForDataIndex(2),
                pointHoverBord1erColor: this.getColorForDataIndex(2),
                data: [4, 971, 2735]
            }
        ]
    }
  }

  getDataOfMetric(metricName: string, listToSearchMetric: ClassAnalysisMetrics) {
    for(let [metric, value] of Object.entries(listToSearchMetric)) {
        if (metric == metricName) console.log(metric, value)
    }
  }

  getColorForDataIndex(dataIndex: number) {
    let colorPalettes: string[] = ['cyan-400', 'green-400', 'teal-400', 'orange-400', 'yellow-400', 'indigo-400'] 
    
    return this.documentStyle.getPropertyValue(colorPalettes[dataIndex % 6]);
  }

  getAnalyzedVersions() {
    this.masterService.getAnalyzedVersions(this.agentId).subscribe( response => {

        this.analysedVersions = [];
        response.forEach( version => {
            if(version.name != this.releaseVersion) {
                this.analysedVersions.push(version.name)
            }
        })
        this.isAnalyzedVersionsLoaded = true;
    })
  }
  isNotNull(data: any) {
    if(data) return false
    else return true
  }

  getClassCompare() {
    let body: ProjectCompareBody[] = [
        {
            agentId: this.agentId,
            versionName: this.releaseVersion,
            method: this.selectedAnalyzeMethod
        },
        {
            agentId: this.agentId,
            versionName: this.selectedReleaseVersion,
            method: this.selectedAnalyzeMethod
        }
    ]  
    console.log(JSON.stringify(body))
    this.masterService.getClassCompare(JSON.stringify(body)).subscribe(response => {
        this.currentClassAverageData = response[0]
        this.selectedClassAverageData = response[1]
    });
  }

  getFileCompare() {
    let body: ProjectCompareBody[] = [
        {
            agentId: this.agentId,
            versionName: this.releaseVersion,
            method: this.selectedAnalyzeMethod
        },
        {
            agentId: this.agentId,
            versionName: this.selectedReleaseVersion,
            method: this.selectedAnalyzeMethod
        }
    ]  

    this.masterService.getFileCompare(JSON.stringify(body)).subscribe(response => {
        this.currentFileAverageData = response[0]
        this.selectedFileAverageData = response[1]
    });
  }

}

