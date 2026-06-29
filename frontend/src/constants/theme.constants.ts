export const THEMES = { light: 'light', dark: 'dark' } as const

export type Theme = (typeof THEMES)[keyof typeof THEMES]
