import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectInformation } from 'src/app/models/ProjectInformation';
import { MasterService } from 'src/app/services/master/master.service';

@Component({
  selector: 'app-version-profile-page',
  templateUrl: './version-profile-page.component.html',
  styleUrls: ['./version-profile-page.component.css']
})
export class VersionProfilePageComponent {
  public files: string[] = ["CompletableFuture.java",
  "CompletionException.java",
  "ConcurrentHashMapV8.java",
  "CountedCompleter.java",
  "DoubleAdder.java",
  "DoubleMaxUpdater.java",
  "ForkJoinPool.java",
  "ForkJoinTask.java",
  "ForkJoinWorkerThread.java",
  "LongAdder.java",
  "LongAdderTable.java",
  "LongMaxUpdater.java",
  "RecursiveAction.java",
  "RecursiveTask.java",
  "StampedLock.java",
  "Striped64.java",
  "AtomicDouble.java",
  "AtomicDoubleArray.java",
  "ReadMostlyVector.java",
  "SequenceLock.java",
  "ConcurrentLinkedDeque.java",
  "CountedCompleter.java",
  "ForkJoinPool.java",
  "ForkJoinTask.java",
  "ForkJoinWorkerThread.java",
  "LinkedTransferQueue.java",
  "Phaser.java",
  "RecursiveAction.java",
  "RecursiveTask.java",
  "ThreadLocalRandom.java",
  "TransferQueue.java",
  "package-info.java",
  "BufferedChecksumIndexOutput.java",
  "RateLimitedFSDirectory.java",
  "NodeInfo.java",
  "NodesInfoResponse.java",
  "NodeStats.java",
  "IndicesStatsAction.java",
  "DeleteWarmerAction.java",
  "PutWarmerAction.java",
  "package-info.java",
  "BulkAction.java",
  "BulkRequestBuilder.java",
  "package-info.java",
  "ShardDeleteByQueryResponse.java",
  "package-info.java",
  "package-info.java",
  "IndexResponse.java",
  "TransportIndexAction.java",
  "package-info.java",
  "package-info.java",
  "MultiSearchAction.java",
  "ReduceSearchPhaseException.java",
  "TransportMultiSearchAction.java",
  "package-info.java",
  "TransportSearchCountAction.java",
  "TransportSearchDfsQueryAndFetchAction.java",
  "TransportSearchQueryAndFetchAction.java",
  "TransportSearchScanAction.java",
  "TransportSearchScrollQueryAndFetchAction.java",
  "AutoCreateIndex.java",
  "PlainActionFuture.java",
  "PlainListenableActionFuture.java",
  "TransportActions.java",
  "TransportMasterNodeReadOperationAction.java",
  "NodeOperationRequest.java",
  "ShardReplicationOperationRequest.java",
  "UpdateResponse.java",
  "BulkUdpModule.java",
  "CacheRecyclerModule.java",
  "InternalClient.java",
  "InternalClusterAdminClient.java",
  "InternalGenericClient.java",
  "InternalIndicesAdminClient.java",
  "NodeClient.java",
  "NodeClusterAdminClient.java",
  "NodeIndicesAdminClient.java",
  "TransportClientNodesService.java",
  "ClusterService.java",
  "ClusterStateUpdateTask.java",
  "ProcessedClusterStateUpdateTask.java",
  "TimeoutClusterStateUpdateTask.java",
  "MetaDataDeleteIndexService.java",
  "MetaDataService.java",
  "DiscoveryNode.java",
  "DiscoveryNodes.java",
  "PlainShardIterator.java",
  "ShardIterator.java",
  "OperationRouting.java",
  "DjbHashFunction.java",
  "InternalClusterService.java",
  "DynamicSettings.java",
  "Numbers.java",
  "ImmutableOpenIntMap.java",
  "ImmutableOpenLongMap.java",
  "CompressedStreamInput.java",
  "CompressedStreamOutput.java",
  "Compressor.java",
  "CompressorContext.java",
  "CompressorFactory.java",
  "LZFCompressedIndexInput.java"];
  public classes: string[] = ["BaseActivity",
  "Constants",
  "Constants$Extra",
  "HomeActivity",
  "ImageGalleryActivity",
  "ImageGalleryActivity$ImagePagerAdapter",
  "ImageGridActivity",
  "ImageGridActivity$1",
  "ImageGridActivity$ImageAdapter",
  "ImageListActivity",
  "ImageListActivity$1",
  "ImageListActivity$ItemAdapter",
  "ImageListActivity$ItemAdapter$ViewHolder",
  "ImagePagerActivity",
  "ImagePagerActivity$ImagePagerAdapter",
  "ImagePagerActivity$ImagePagerAdapter$1",
  "UILApplication",
  "ExtendedImageDownloader",
  "UILWidgetProvider",
  "UILWidgetProvider$1",
  "UILWidgetProvider$2",
  "BaseDiscCache",
  "DiscCacheAware",
  "LimitedDiscCache",
  "FileCountLimitedDiscCache",
  "LimitedAgeDiscCache",
  "TotalSizeLimitedDiscCache",
  "UnlimitedDiscCache",
  "FileNameGenerator",
  "HashCodeFileNameGenerator",
  "Md5FileNameGenerator",
  "BaseMemoryCache<K extends Object, V extends Object>",
  "LimitedMemoryCache<K extends Object, V extends Object>",
  "MemoryCacheAware<K extends Object, V extends Object>",
  "FIFOLimitedMemoryCache",
  "FuzzyKeyMemoryCache<K extends Object, V extends Object>",
  "LRULimitedMemoryCache",
  "LargestLimitedMemoryCache",
  "LimitedAgeMemoryCache<K extends Object, V extends Object>",
  "UsingFreqLimitedMemoryCache",
  "WeakMemoryCache",
  "DefaultConfigurationFactory",
  "DisplayBitmapTask",
  "DisplayImageOptions",
  "DisplayImageOptions$Builder",
  "ImageDecoder",
  "ImageLoader",
  "ImageLoaderConfiguration",
  "ImageLoaderConfiguration$1",
  "ImageLoaderConfiguration$Builder",
  "ImageLoadingInfo",
  "LoadAndDisplayImageTask",
  "LoadAndDisplayImageTask$1",
  "LoadAndDisplayImageTask$2",
  "FailReason",
  "FlushedInputStream",
  "ImageLoadingListener",
  "ImageScaleType",
  "ImageSize",
  "MemoryCacheUtil",
  "MemoryCacheUtil$1",
  "PauseOnScrollListener",
  "QueueProcessingType",
  "SimpleImageLoadingListener",
  "ViewScaleType",
  "BlockingDeque<E extends Object>",
  "Deque<E extends Object>",
  "LIFOLinkedBlockingDeque<T extends Object>",
  "LinkedBlockingDeque<E extends Object>",
  "LinkedBlockingDeque$AbstractItr",
  "LinkedBlockingDeque$DescendingItr",
  "LinkedBlockingDeque$Itr",
  "LinkedBlockingDeque$Node<E extends Object>",
  "BitmapDisplayer",
  "FadeInBitmapDisplayer",
  "FakeBitmapDisplayer",
  "RoundedBitmapDisplayer",
  "SimpleBitmapDisplayer",
  "HttpClientImageDownloader",
  "ImageDownloader",
  "URLConnectionImageDownloader",
  "FileUtils",
  "L"]
  public selectedAnalyzeMethod!: string;
  public project!: ProjectInformation;
  public isAnalysisLoading: boolean = false;
  public selectedFile!: string;
  public selectedClass!: string;

  repoName!: string;
  public releaseVersion!: string;
  public analysedVersions: string[] = ["v1.2", "v2.1", "v4.22"];

  data: any;
  data1: any;
  classData: any;
  fileData: any;

  options: any;
  options1: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private masterService: MasterService
  ) {
    
  }
  ngOnInit() {
    this.repoName = this.activatedRoute.snapshot.paramMap.get('projectName')!;
    this.releaseVersion = this.activatedRoute.snapshot.paramMap.get('releaseVersion')!.replaceAll("\\", "/");
    this.selectedAnalyzeMethod = this.activatedRoute.snapshot.paramMap.get('analyzeMethod')!;
    this.project = JSON.parse(localStorage.getItem("project")!);

    this.isAnalysisLoading = true;    


    // Weighted methods per class: WMC
    // Coupling Between object classes: CBO
    // lack of cohesion in methods: lCOM
    // afferent couplings : Ca
    // Efferent Couplings: Ce
    // lack of cohesion in methods(Henderson-Sellers): LCOM3
    // Cohesion Among Methods of Class: CAM
    // Inheritance Coupling: IC 
    // Coupling Between Methods: CBM 
    // Average Method Complexity: AMC 
    // McCabe’s cyclomatic complexity: CC 
    // Maximum McCabe’s cyclomatic complexity: MAX CC 
    // Average McCabe’s cyclomatic complexity: AVG CC

    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    this.data = {
        labels: ['WMC', 'CBO', 'lCOM', 'Ca', 'Ce', 'LCOM3', 'CAM'],
        datasets: [
            {
                label: this.releaseVersion,
                borderColor: documentStyle.getPropertyValue('--bluegray-400'),
                pointBackgroundColor: documentStyle.getPropertyValue('--bluegray-400'),
                pointBorderColor: documentStyle.getPropertyValue('--bluegray-400'),
                pointHoverBackgroundColor: textColor,
                pointHoverBorderColor: documentStyle.getPropertyValue('--bluegray-400'),
                data: [65, 59, 90, 81, 56, 55, 40]
            },
            {
                label: "v0.1",
                borderColor: documentStyle.getPropertyValue('--pink-400'),
                pointBackgroundColor: documentStyle.getPropertyValue('--pink-400'),
                pointBorderColor: documentStyle.getPropertyValue('--pink-400'),
                pointHoverBackgroundColor: textColor,
                pointHoverBorderColor: documentStyle.getPropertyValue('--pink-400'),
                data: [28, 48, 40, 19, 96, 27, 100]
            }
        ]
    };

    this.classData = {
        labels: ['WMC', 'NOA', 'TNOS'],
        datasets: [
            {
                label: "BaseActivity",
                borderColor: documentStyle.getPropertyValue('--bluegray-400'),
                pointBackgroundColor: documentStyle.getPropertyValue('--bluegray-400'),
                pointBorderColor: documentStyle.getPropertyValue('--bluegray-400'),
                pointHoverBackgroundColor: textColor,
                pointHoverBorderColor: documentStyle.getPropertyValue('--bluegray-400'),
                data: [7, 0, 12]
            },
            {
                label: "Average",
                borderColor: documentStyle.getPropertyValue('--pink-400'),
                pointBackgroundColor: documentStyle.getPropertyValue('--pink-400'),
                pointBorderColor: documentStyle.getPropertyValue('--pink-400'),
                pointHoverBackgroundColor: textColor,
                pointHoverBord1erColor: documentStyle.getPropertyValue('--pink-400'),
                data: [4, 1, 7]
            }
        ]
    };

    this.fileData = {
        labels: ['McCC', 'NumOfPrevMods', 'NumOfDevCommits'],
        datasets: [
            {
                label: "CompletableFuture.java",
                borderColor: documentStyle.getPropertyValue('--bluegray-400'),
                pointBackgroundColor: documentStyle.getPropertyValue('--bluegray-400'),
                pointBorderColor: documentStyle.getPropertyValue('--bluegray-400'),
                pointHoverBackgroundColor: textColor,
                pointHoverBorderColor: documentStyle.getPropertyValue('--bluegray-400'),
                data: [584, 1, 4735]
            },
            {
                label: "Average",
                borderColor: documentStyle.getPropertyValue('--pink-400'),
                pointBackgroundColor: documentStyle.getPropertyValue('--pink-400'),
                pointBorderColor: documentStyle.getPropertyValue('--pink-400'),
                pointHoverBackgroundColor: textColor,
                pointHoverBord1erColor: documentStyle.getPropertyValue('--pink-400'),
                data: [4, 971, 2735]
            }
        ]
    };
    
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
    this.data1 = {
        labels: ['v1.2', 'v1.8', 'v1.29'],
        datasets: [
            {
                type: 'line',
                label: 'Total Commit Count',
                borderColor: documentStyle.getPropertyValue('--blue-500'),
                borderWidth: 2,
                fill: false,
                tension: 0.5,
                data: [421, 331, 122,]
            },
            {
                type: 'bar',
                label: 'Efferent Coupling',
                backgroundColor: documentStyle.getPropertyValue('--green-500'),
                data: [84, 66, 20],
                borderColor: 'white',
                borderWidth: 2
            },
            {
                type: 'bar',
                label: 'Bug Fix',
                backgroundColor: documentStyle.getPropertyValue('--orange-500'),
                data: [24, 18, 6]
            }
        ]
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
    console.log("Previous Label: " + this.data.datasets[1].label)
        console.log("Selected: " + this.selectedAnalyzeMethod)
        console.log("Label: " + this.data.datasets[1].label)
        this.data.datasets[1].label = this.selectedAnalyzeMethod;   
  }

}
