import { useTheme } from "../theme/Theme-provider"
import { Switch } from "../ui/switch"

const Toggle = () => {
    const { theme, setTheme } = useTheme()

    const handleToggle = (checked: boolean) => {
      setTheme(checked ? "light" : "dark")
    }
  return (
         <Switch 
        checked={theme === "light"} 
        onCheckedChange={handleToggle}
      />
  )
}
export default Toggle
