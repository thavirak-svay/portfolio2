import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * A utility function that combines Tailwind CSS classes
 * Uses clsx to combine class names and tailwind-merge to handle conflicts
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * A utility constant that provides glassmorphism styles
 */
export const glassmorphism =
  "overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 shadow-lg shadow-black/5 backdrop-blur-lg dark:border-white/10 dark:bg-black/5 dark:shadow-black/5 dark:shadow-lg";
