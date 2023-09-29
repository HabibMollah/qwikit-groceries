import { Switch } from "@nextui-org/switch";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { TbSunHigh, TbMoon } from "react-icons/tb";

export default function ThemeSwitcher() {
  const [_mounted, _setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    _setMounted(true);
  }, []);

  return (
    <div>
      <Switch
        className="-mr-[8px] sm:mr-0"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        defaultSelected
        size="md"
        color="primary"
        thumbIcon={({ isSelected, className }) =>
          isSelected ? (
            <TbMoon className={className} />
          ) : (
            <TbSunHigh className={className} />
          )
        }
      />
    </div>
  );
}
