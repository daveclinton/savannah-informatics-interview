"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";

export default function ThemeCookieSync() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    document.cookie = `theme=${resolvedTheme}; path=/; max-age=31536000`;
  }, [resolvedTheme]);

  return null;
}
