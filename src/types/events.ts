// Add this interface for the new schedule structure
export interface BatchSchedule {
  days: string[];
  timeSlots: Array<{ start: string; end: string }>;
}

export interface ClassSchedule {
  weekday: BatchSchedule;
  weekend: BatchSchedule;
  frequency: string;
}

// Update the RegularClass interface (only showing relevant parts)
export interface RegularClass {
  // ... other fields
  schedule: ClassSchedule;
  // ... other fields
}