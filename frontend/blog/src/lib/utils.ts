import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'
import type { ClassValue } from 'clsx'


export function cn(...inputs: Array<ClassValue>) {
  return twMerge(clsx(inputs))
}


/**
 * Returns the Strapi base URL.
 * Reads from VITE_STRAPI_URL environment variable.
 * Falls back to http://localhost:1337 for local development.
 */
export function getStrapiURL() : string {
  return import.meta.env.VITE_STRAPI_URL || "http://localhost:1337";
}


export function formatDate(date: any) {
   
    const formatted = new Date(date).toLocaleString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',

   
  })

  return(formatted)

   
}