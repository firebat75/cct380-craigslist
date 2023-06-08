import { writable } from 'svelte/store';

export let events = writable(false);
export let jobs = writable(false);
export let gigs = writable(false);