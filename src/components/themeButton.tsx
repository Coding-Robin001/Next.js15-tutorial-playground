"use client"

import { useTheme } from "./theme-providers"

export default function ThemeButton() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div
      style={{
        background: theme.colors.secondary,
        color: "white",
        padding: "1rem",
        borderRadius: "8px",
        textAlign: "center",
      }}
    >
      <p>Current theme: {theme.mode}</p>
      <button
        onClick={toggleTheme}
        style={{
          marginTop: "1rem",
          padding: "0.5rem 1rem",
          background: theme.colors.primary,
          border: "none",
          borderRadius: "4px",
          color: "white",
          cursor: "pointer",
        }}
      >
        Toggle Theme
      </button>
    </div>
  )
}
