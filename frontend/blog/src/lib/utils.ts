import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'
import type { ClassValue } from 'clsx'


export function cn(...inputs: Array<ClassValue>) {
  return twMerge(clsx(inputs))
}


export function getStrapiURL() {
  return import.meta.env.VITE_STRAPI_URL || "http://localhost:1337";
}