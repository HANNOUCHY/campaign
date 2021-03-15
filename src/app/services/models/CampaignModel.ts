
export interface Segment{
    value: string;
}

export interface CampaignId{
    Value: string;
}
export interface ListCampaign{
    pageable: Size;
    result: Campaign[];
    toral: string;
}
export interface Size{
    page: string;
    size: string;
}
export interface Campaign{
    id: CampaignId;
    details: CampaignDetails;
    statistics: CampaignStatistics;
    diffusion: Diffusion;
    targets: CampaignTargets;
}

export interface CampaignTargets{
    segments: Segment[];
}

export interface Diffusion{
    period: Period;
    slots: CampaignDiffusionSlots;
}
export interface CampaignDiffusionSlots {
    slots: WeekDay;
}
export interface WeekDay {
    MONDAY: TimeSlot;
    TUESDAY: TimeSlot;
    WEDNESDAY: TimeSlot;
    THURSDAY: TimeSlot;
    FRIDAY: TimeSlot;
    SATURDAY: TimeSlot;
    SUNDAY: TimeSlot;
}
export interface  TimeSlot{
    TS_00_08: boolean;
    TS_08_10: boolean;
    TS_09_12: boolean;
    TS_10_12: boolean;
    TS_12_14: boolean;
    TS_12_15: boolean;
    TS_14_16: boolean;
    TS_15_18: boolean;
    TS_16_18: boolean;
    TS_18_21: boolean;
    TS_21_24: boolean;
}
export interface CampaignStatistics{
    views: CampaignViewStatistics;
    clicks: CampaignClicks;
}

export interface CampaignDetails{
    name: string;
    source: string;
    status: string;
    budget: Amount;
    statistics: CampaignStatistics[];
    diffusion: Diffusion[];
    targets: CampaignTargets[];

}
export interface CampaignViewStatistics{
    expected: Counts;
    effective: Counts;
    unique: Counts;
}
export interface Counts{
    counts: CounterByDevices;
}
export interface CounterByDevices{
    MOBILE: string;
    DESKTOP: string;
    TABLET: string;
    OTHER: string;
}
export interface CampaignClicks{
    count: number;
    unique: number;
}

export interface Amount{
    value: number;
    currency: string;
}

export interface Period{
    from: string;
    to: string;
}

