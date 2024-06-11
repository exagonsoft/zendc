import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const splitArray = <T>(array: Array<T>, numParts: number) => {
  const result: Array<Array<T>> = [];

  for (let i = 0; i < array.length; i++) {
    const index = i % numParts;
    console.log(index);
    
    if(!result[index]){
      result[index] = [];
    }else{
      result[index].push(array[i]);
    }
  }

  return result;
};
