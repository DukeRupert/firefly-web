import { writable, type Writable } from 'svelte/store';

export const isNavOpen: Writable<boolean> = writable(false);

// toggle monthly or yearly billing, monthly = true
export const monthlySub: Writable<boolean> = writable(true);

// track active pricing card
export const activeCard: Writable<string> = writable('Business');
