import { Pipe, PipeTransform } from '@angular/core';
import classMetricsDictionary from './metrics.json';

@Pipe({
  name: 'metricNames'
})
export class MetricNamesPipe implements PipeTransform {

  metrics = Object.entries(classMetricsDictionary);

  transform(shortMetric: string, ...args: unknown[]): string {
    let metricLongForm = "";

    for(let metric of this.metrics) {
      if(metric[0] == shortMetric) {
        metricLongForm = metric[1];
      }
    }

    return metricLongForm;
  }

}
