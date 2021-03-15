import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotsCampaignComponent } from './slots-campaign.component';

describe('SlotsCampaignComponent', () => {
  let component: SlotsCampaignComponent;
  let fixture: ComponentFixture<SlotsCampaignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlotsCampaignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotsCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
