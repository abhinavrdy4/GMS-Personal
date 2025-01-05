import { LucideIcon } from 'lucide-react';

export interface Category {
  name: string;
  icon: LucideIcon;
  color: string;
  gradient: string;
  type: 'event' | 'class';
}