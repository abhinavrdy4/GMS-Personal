import { Music2, Palette, Mic2, HeartHandshake, Camera, Music4, Repeat } from 'lucide-react';
import type { Category } from '../types/categories';

export const categories: Category[] = [
  { name: 'Music', icon: Music2, color: 'from-pink-500 to-rose-500', gradient: 'pink-to-rose', type: 'event' },
  { name: 'Art', icon: Palette, color: 'from-purple-500 to-indigo-500', gradient: 'purple-to-indigo', type: 'event' },
  { name: 'Poetry', icon: Mic2, color: 'from-blue-500 to-cyan-500', gradient: 'blue-to-cyan', type: 'event' },
  { name: 'Workshops', icon: HeartHandshake, color: 'from-green-500 to-emerald-500', gradient: 'green-to-emerald', type: 'event' },
  { name: 'Dance', icon: Music4, color: 'from-yellow-500 to-orange-500', gradient: 'yellow-to-orange', type: 'event' },
  { name: 'Photography', icon: Camera, color: 'from-red-500 to-pink-500', gradient: 'red-to-pink', type: 'event' },
  { name: 'Regulars', icon: Repeat, color: 'from-teal-500 to-cyan-500', gradient: 'teal-to-cyan', type: 'class' },
];