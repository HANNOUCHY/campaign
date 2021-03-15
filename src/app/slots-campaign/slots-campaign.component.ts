import { Component, Inject, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CampaignService } from '../services/campaign.service';
import { CampaignDiffusionSlots, Diffusion, TimeSlot } from '../services/models/CampaignModel';

@Component({
  selector: 'app-slots-campaign',
  templateUrl: './slots-campaign.component.html',
  styleUrls: ['./slots-campaign.component.scss']
})
export class SlotsCampaignComponent implements OnInit {
  Columnsweek: string[] = ['Days'];
  Columnsweekend: string[] = ['Days'];
  itemsweek: any[] = [];
  itemsweekend: any[] = [];
  obj = {};
  form = '';
  to = '';
  constructor(@Inject(MAT_DIALOG_DATA) public data: Diffusion, public campaignservice: CampaignService) { }
  ngOnInit(): void {
    this.form = this.data.period.from || '';
    this.to = this.data.period.to || '';
    for (const [key, value] of Object.entries(this.data.slots.slots)) {
      this.obj = {};
      Object.assign(this.obj, {Days: key});
      Object.assign(this.obj, value);
      if ((key !== 'SATURDAY') && (key !== 'SUNDAY')){
        this.itemsweek.push(this.obj);
      }else{
        this.itemsweekend.push(this.obj);
      }
    }
    for (const [key, value] of Object.entries(this.data.slots.slots.FRIDAY)) {
      this.Columnsweek.push(`${key}`);
    }
    for (const [key, value] of Object.entries(this.data.slots.slots.SUNDAY)) {
      this.Columnsweekend.push(`${key}`);
    }
  }

}
