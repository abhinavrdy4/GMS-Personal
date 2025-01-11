export interface BatchSchedule {
  name: string;
  days: string[];
  timeSlots: Array<{ start: string; end: string }>;
}

export interface ClassSchedule {
  batches: BatchSchedule[];
  frequency: string;
}

export interface RegularClass {
  id: number;
  type: 'regular';
  // ... other fields
  schedule: ClassSchedule;
  // ... other fields
}