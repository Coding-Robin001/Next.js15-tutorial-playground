"use client"

import { createContext, useContext, useState, useEffect } from "react"

type Theme = {
  mode: "light" | "dark"
  colors: {
    primary: string
    secondary: string
  }
}

type ThemeContextType = {
  theme: Theme
  toggleTheme: () => void
}

const lightTheme: Theme = {
  mode: "light",
  colors: {
    primary: "#007bff",
    secondary: "#6c757d",
  },
}

const darkTheme: Theme = {
  mode: "dark",
  colors: {
    primary: "#1e90ff",
    secondary: "#343a40",
  },
}

const ThemeContext = createContext<ThemeContextType>({
  theme: lightTheme,
  toggleTheme: () => {},
})

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(lightTheme)

  // Load theme from cookie when component mounts
  useEffect(() => {
    const match = document.cookie.match(/theme=(light|dark)/)
    if (match) {
      setTheme(match[1] === "dark" ? darkTheme : lightTheme)
    }
  }, [])

  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev.mode === "light" ? darkTheme : lightTheme

      // Save to cookie (expires in 30 days)
      document.cookie = `theme=${newTheme.mode}; path=/; max-age=${30 * 24 * 60 * 60}`

      return newTheme
    })
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
