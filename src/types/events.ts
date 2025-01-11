export interface TimeSlot {
  start: string;
  end: string;
}

export interface Batch {
  name: string;
  days: string[];
  timeSlots: TimeSlot[];
}

export interface ClassSchedule {
  frequency: string;
  batches: Batch[];
}

// ... rest of the types remain the same