import { Component, Inject, Input, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import { CampaignStatistics, CounterByDevices, Counts } from '../services/models/CampaignModel';
@Component({
  selector: 'app-statistics-campaign',
  templateUrl: './statistics-campaign.component.html',
  styleUrls: ['./statistics-campaign.component.scss']
})
export class StatisticsCampaignComponent implements OnInit {
  // Pie
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = [];
  public pieChartData: SingleDataSet = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public clickcount = 0;
  public clickunique = 0;
  constructor(@Inject(MAT_DIALOG_DATA) public data: CampaignStatistics) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
   }

  ngOnInit(): void {
    this.clickcount = this.data.clicks.count;
    this.clickunique = this.data.clicks.unique;
    this.changechart(this.data.views.effective.counts);
  }
  changechart(type: CounterByDevices): void {
    this.pieChartData = [];
    this.pieChartLabels = [];
    for (const [key, value] of Object.entries(type)) {
      this.pieChartLabels.push(`${key}`);
      this.pieChartData.push(Number(`${value}`));
    }
  }
  onTabChanged(event: any): void{
    switch (event.index) {
      case 0:
        {
          this.changechart(this.data.views.effective.counts);
        }
        break;
        case 1:
          {
            this.changechart(this.data.views.expected.counts);
          }
          break;
          case 2:
            {
              this.changechart(this.data.views.unique.counts);
            }
            break;
  }
}
}

