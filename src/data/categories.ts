import { Shuffle, ToyBrick, Dumbbell, Palette, Repeat } from 'lucide-react';
import type { Category } from '../types/categories';

export const categories: Category[] = [
{ name: 'Workshops', icon: Shuffle, color: 'from-green-500 to-emerald-500', gradient: 'green-to-emerald', type: 'event' },
{ name: 'Regulars', icon: Repeat, color: 'from-yellow-500 to-orange-500', gradient: 'yellow-to-orange', type: 'class' },
{ name: 'Kids', icon: ToyBrick, color: 'from-red-500 to-pink-500', gradient: 'red-to-pink', type: 'event' },
{ name: 'Fitness', icon: Dumbbell, color: 'from-blue-500 to-cyan-500', gradient: 'blue-to-cyan', type: 'event' },
{ name: 'Art & Craft', icon: Palette, color: 'from-pink-500 to-rose-500', gradient: 'pink-to-rose', type: 'event' },
];