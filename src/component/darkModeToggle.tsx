import React, { useState, useEffect } from "react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Tooltip from "@mui/material/Tooltip";
import { useTheme } from "@mui/material/styles";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    setIsDarkMode(theme.palette.mode === "dark");
  }, [theme.palette.mode]);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };

  return (
    <Tooltip title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}>
      <button
        onClick={handleToggle}
        className={`fixed bottom-5 left-5 p-4 rounded-full bg-gray-800 text-white shadow-lg transition-all duration-300 ease-in-out transform ${isDarkMode ? "rotate-180" : "rotate-0"} hover:bg-gray-700 focus:outline-none`}
      >
        {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
      </button>
    </Tooltip>
  );
};

export default DarkModeToggle;
