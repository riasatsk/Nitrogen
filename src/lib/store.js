import { writable } from 'svelte/store';
export const responseStore = writable({});
export const time = writable('');
export const status = writable('');
export const theme = writable('dark');
export const bodyData = writable('');
