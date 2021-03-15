import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsCampaignComponent } from './statistics-campaign.component';

describe('StatisticsCampaignComponent', () => {
  let component: StatisticsCampaignComponent;
  let fixture: ComponentFixture<StatisticsCampaignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatisticsCampaignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
