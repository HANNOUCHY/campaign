import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CampaignService } from '../services/campaign.service';
import { Campaign, CampaignDetails, CampaignStatistics } from '../services/models/CampaignModel';
import {MatDialog} from '@angular/material/dialog';
import { StatisticsCampaignComponent } from '../statistics-campaign/statistics-campaign.component';
import { SlotsCampaignComponent } from '../slots-campaign/slots-campaign.component';
import { SegmentsCampaignComponent } from '../segments-campaign/segments-campaign.component';
@Component({
  selector: 'app-campaign-listing',
  templateUrl: './campaign-listing.component.html',
  styleUrls: ['./campaign-listing.component.scss']
})
export class CampaignListingComponent implements OnInit {
  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;
  displayedColumns: string[] = ['name', 'source', 'status', 'budget', 'statistics', 'segments', 'slots'];
  dataSource = new MatTableDataSource<CampaignDetails>() ;
  items: any[] = [];
  page = 1;
  size = 10;
  totalpage = '';
  itemsdetail: any[] = [];
  obj: {} = {};
  StatisticsCampaignComponent = StatisticsCampaignComponent;
  SlotsCampaignComponent = SlotsCampaignComponent;
  SegmentsCampaignComponent = SegmentsCampaignComponent;
  constructor(public servicecampaign: CampaignService, public dialog: MatDialog) {
   }

  ngOnInit(): void {
    this.servicecampaign.listcampaigns()
    .pipe()
    .subscribe({
      next: data => {
        data.result.forEach(item =>
           {
            this.obj  = item.details;
            Object.assign(this.obj, item);
            this.items.push(this.obj);
            });
        this.dataSource = new MatTableDataSource<CampaignDetails>(this.items);
        this.dataSource.paginator = this.paginator  || null;
        this.dataSource.sort = this.sort  || null;
        this.page = Number(data.pageable.page) ;
        this.size = Number(data.pageable.size) ;
        this.totalpage = data.toral;
      },
      error: err => {
        console.log('Error loading user list.');
      }
    });
  }
  openDialog(itemdata: any , component: any ): void{
    const dialogRef = this.dialog.open(component, {
      data: itemdata,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    if (this.dataSource){
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }

  }
}
