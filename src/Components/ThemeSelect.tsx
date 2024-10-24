"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "react-feather";
import { cx } from "../lib/utils";

const THEME_MAP: { [key: string]: { label: string; icon: React.ReactNode } } = {
    light: {
        label: "Light",
        icon: <Sun width=".9em" />,
    },
    dark: {
        label: "Dark",
        icon: <Moon width=".9em" />,
    },
};

export const ThemeSelect = () => {
    const [mounted, setMounted] = useState(false);
    const { theme: activeTheme, themes, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {

        // setTheme(e.target.value);
    } 

    return (
    <div className="flex justify-left gap-1">
        {
            themes.map((theme) => {
                if (theme === "system") return null;
                // ? Render Icon Button
                return (
                    <button
                        key={theme}
                        className={cx(
                            "rounded-full w-8 h-8 flex items-center justify-center",
                            "border-gray-200",
                            "dark:border-gray-700",
                            {
                                "bg-[#3D3D3D]": theme === "dark" && activeTheme === theme,
                                "bg-[#dadada]": theme === "light" && activeTheme === theme,
                            }
                        )}
                        onClick={() => setTheme(theme)}
                    >
                        {THEME_MAP[theme]?.icon}
                    </button>
                );
            })
        }
        </div>
    );
};
