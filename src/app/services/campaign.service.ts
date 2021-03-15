import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OdbService } from './odb.service';
import { shareReplay, tap } from 'rxjs/operators';
import { Campaign, ListCampaign } from './models/CampaignModel';
@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  constructor(public serviceodb: OdbService) { }

  listcampaigns(): Observable<ListCampaign>{
    return this.serviceodb.call('campaigns', 'get').pipe(
      tap(console.log),
      shareReplay(1),
      tap(() => console.log('after sharing')));
   }

}
