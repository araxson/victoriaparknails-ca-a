import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const placeholderImage = "/Placeholder_view_vector.svg";

export function getPlaceholderImage() {
  return placeholderImage;
}
