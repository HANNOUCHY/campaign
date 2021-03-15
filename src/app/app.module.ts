import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {CdkTableModule} from '@angular/cdk/table';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CampaignListingComponent } from './campaign-listing/campaign-listing.component';
import { HttpClientModule } from '@angular/common/http';
import { SegmentsCampaignComponent } from './segments-campaign/segments-campaign.component';
import { SlotsCampaignComponent } from './slots-campaign/slots-campaign.component';
import { StatisticsCampaignComponent } from './statistics-campaign/statistics-campaign.component';
import { ChartsModule } from 'ng2-charts';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    CampaignListingComponent,
    SegmentsCampaignComponent,
    SlotsCampaignComponent,
    StatisticsCampaignComponent
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    CdkTableModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ChartsModule,
    MatTabsModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
