"use client";
import { useEffect, useState } from "react";
import { getTheme, setTheme, getBrowserWidth } from "@/utils/client-utils";

export default function ClientComp() {
  const [theme, setLocalTheme] = useState("light");
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setLocalTheme(getTheme());
    setTheme("dark"); // save dark theme
    setWidth(getBrowserWidth());
  }, []);

  return (
    <div>
      <p>Theme: {theme}</p>
      <p>Browser width: {width}px</p>
    </div>
  );
}
