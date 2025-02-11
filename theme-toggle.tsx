import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="w-10 h-10 hover:bg-gray-100 dark:hover:bg-gray-800"
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
      ) : (
        <Sun className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
      )}
    </Button>
  )
}
