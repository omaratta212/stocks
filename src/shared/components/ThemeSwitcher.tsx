// import { useTheme } from 'next-themes';
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useDarkMode } from "usehooks-ts";

const ThemeSwitch = () => {
  const { isDarkMode, toggle } = useDarkMode({
    defaultValue: true,
  });

  return <DarkModeSwitch checked={isDarkMode} onChange={toggle} size={20} />;
};

export default ThemeSwitch;
