import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="h-11 w-11 rounded-full border border-white/60 bg-background/70 backdrop-blur-xl">
        <Sun className="h-5 w-5" />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="h-11 w-11 rounded-full border border-white/60 bg-background/70 text-foreground shadow-[var(--shadow-soft)] backdrop-blur-xl hover:bg-background/90 dark:border-white/10 dark:bg-card/80"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-primary transition-all" />
      ) : (
        <Moon className="h-5 w-5 text-primary transition-all" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
