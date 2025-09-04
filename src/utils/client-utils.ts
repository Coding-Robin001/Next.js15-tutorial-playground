import "client-only";

export function sayHelloFromClient() {
  return `Hello from the browser 👋`;
}

// Get the current theme from localStorage
export function getTheme() {
  return localStorage.getItem("theme") || "light";
}

// Save a new theme into localStorage
export function setTheme(theme: string) {
  localStorage.setItem("theme", theme);
  return `Theme set to ${theme}`;
}

// Get current browser width
export function getBrowserWidth() {
  return typeof window !== "undefined" ? window.innerWidth : 0;
}
