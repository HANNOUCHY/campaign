import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CampaignTargets } from '../services/models/CampaignModel';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
@Component({
  selector: 'app-segments-campaign',
  templateUrl: './segments-campaign.component.html',
  styleUrls: ['./segments-campaign.component.scss']
})
export class SegmentsCampaignComponent implements OnInit {
  toppings = new FormControl();
  toppingList: string[] = [];
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  constructor(@Inject(MAT_DIALOG_DATA) public data: CampaignTargets) { }

  ngOnInit(): void {
    this.data.segments.forEach(seg =>{
      this.toppingList.push(seg.value);
    });

  }
}
