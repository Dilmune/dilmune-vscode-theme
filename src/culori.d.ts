declare module 'culori' {
  export interface Oklch {
    mode: 'oklch'
    l?: number
    c?: number
    h?: number
    alpha?: number
  }

  export function parse(color: string): { mode: string } | undefined
  export function oklch(color: { mode: string }): Oklch | undefined
  export function formatHex(color: Oklch | { mode: string; l?: number; c?: number; h?: number }): string
}
