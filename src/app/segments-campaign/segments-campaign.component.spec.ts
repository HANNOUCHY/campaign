import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentsCampaignComponent } from './segments-campaign.component';

describe('SegmentsCampaignComponent', () => {
  let component: SegmentsCampaignComponent;
  let fixture: ComponentFixture<SegmentsCampaignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegmentsCampaignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SegmentsCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
