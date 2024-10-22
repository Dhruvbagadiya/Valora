"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Command, Sun, Moon, Code } from "react-feather";
import { cx } from "@App/lib/utils";

const THEME_MAP: { [key: string]: { label: string; icon: React.ReactNode } } = {
    system: {
        label: "System",
        icon: <Command width=".9em" />,
    },
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
    <div className="flex justify-left gap-5 relative">
        {/* <label htmlFor="theme-menu" className="sr-only">
        Toggle theme
        </label>
        <span
        aria-hidden={true}
        className={cx(
            "absolute top-1/2 -translate-y-1/2 left-2 pointer-events-none",
            "opacity-50"
        )}
        >
        {THEME_MAP[activeTheme!].icon}
        </span>
        <span
        aria-hidden={true}
        className="absolute top-1/2 -translate-y-1/2 right-2 pointer-events-none"
        >
        <Code width=".9em" className="rotate-90 opacity-50" />
        </span> */}
        {/* <select
        id="theme-menu"
        className={cx(
            "appearance-none rounded-md sm:w-full pl-8 pr-12 border",
            "bg-gray-100 border-gray-200",
            "dark:bg-gray-800 dark:border-gray-700"
        )}
        onChange={handleChange}
        value={activeTheme}
        >
            {themes.map((theme) => {
            return (
                <option key={theme} value={theme}>
                {THEME_MAP[theme].label}
                </option>
            );
            })}
        </select> */}

        {
            themes.map((theme) => {
                // ? Render Icon Button
                return (
                    <button
                        key={theme}
                        className={cx(
                            "rounded-full p-3",
                            "bg-gray-100 border border-gray-200",
                            "dark:bg-gray-800 dark:border-gray-700",
                            {
                                "bg-gray-200": activeTheme === theme,
                            }
                        )}
                        onClick={() => setTheme(theme)}
                    >
                        {THEME_MAP[theme].icon}
                    </button>
                );
            })
        }
        </div>
    );
};