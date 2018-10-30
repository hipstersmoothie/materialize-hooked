import { RefObject } from 'react';

declare module 'react' {
  export function useEffect(fn: () => void): void;
  export function useRef(): RefObject<HTMLDivElement>;
  export function useState<T>(arg?: T): [T, (newValue: T) => void];
}
