import { RefObject } from 'react';

declare module 'react' {
  export function useEffect(fn: () => void): void;
  export function useRef(): RefObject<HTMLDivElement>;
}
