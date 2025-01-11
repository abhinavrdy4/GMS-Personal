// Add this interface for the new schedule structure
export interface BatchSchedule {
  days: string[];
  timeSlots: Array<{ start: string; end: string }>;
}

export interface ClassSchedule {
  weekday?: BatchSchedule;
  weekend?: BatchSchedule;
  frequency: string;
}

export interface RegularClass {
  // ... other fields remain the same
  schedule: ClassSchedule;
  // ... other fields remain the same
}