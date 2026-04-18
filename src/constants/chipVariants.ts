export const CHIP_VARIANTS = {
  default: {
    backgroundColor: "rgba(255, 255, 255, 0.03)",
    borderColor: "var(--color-border)",
    textColor: "var(--color-text-primary)",
  },
  accent: {
    backgroundColor: "rgba(179, 0, 57, 0.12)",
    borderColor: "rgba(179, 0, 57, 0.35)",
    textColor: "var(--color-text-primary)",
  },
  success: {
    backgroundColor: "rgba(30, 131, 42, 0.12)",
    borderColor: "rgba(30, 131, 42, 0.35)",
    textColor: "var(--color-text-primary)",
  },
  warning: {
    backgroundColor: "rgba(175, 166, 42, 0.12)",
    borderColor: "rgba(175, 166, 42, 0.35)",
    textColor: "var(--color-text-primary)",
  },
} as const;
