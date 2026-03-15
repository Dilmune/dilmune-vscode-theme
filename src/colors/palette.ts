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

  parchment: {
    50: hex(0.97, 0.006, 80),
    100: hex(0.95, 0.008, 78),
    200: hex(0.92, 0.012, 75),
    300: hex(0.86, 0.014, 75),
    400: hex(0.70, 0.04, 65),
    500: hex(0.55, 0.015, 55),
    600: hex(0.45, 0.02, 55),
    700: hex(0.40, 0.035, 55),
    800: hex(0.30, 0.025, 50),
    900: hex(0.20, 0.015, 45),
    950: hex(0.15, 0.012, 40),
  },
}
