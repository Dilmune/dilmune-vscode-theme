import { formatHex } from 'culori'

function hex(l: number, c: number, h: number): string {
  return formatHex({ mode: 'oklch', l, c, h })
}

export const palette = {
  terracotta: hex(0.55, 0.19, 28),
  sandstone: hex(0.55, 0.14, 55),
  amber: hex(0.55, 0.16, 70),
  dune: hex(0.50, 0.01, 60),
  sage: hex(0.50, 0.14, 140),
  verdigris: hex(0.50, 0.12, 180),
  clay: hex(0.50, 0.14, 350),
  fossil: hex(0.50, 0.08, 50),

  // Warm gray scale — all hue 78 (portal dim DNA), graduated chroma
  parchment: {
    50: hex(0.97, 0.006, 78),
    100: hex(0.95, 0.008, 78),
    200: hex(0.92, 0.012, 78),
    300: hex(0.86, 0.016, 78),
    400: hex(0.70, 0.028, 78),
    500: hex(0.55, 0.025, 78),
    600: hex(0.45, 0.025, 78),
    700: hex(0.40, 0.028, 78),
    800: hex(0.30, 0.028, 78),
    900: hex(0.20, 0.020, 78),
    950: hex(0.15, 0.015, 78),
  },
}
