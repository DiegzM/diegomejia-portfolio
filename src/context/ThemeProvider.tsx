import React from "react";

export type Theme = 'light' | 'dark';

function setThemeOnDocument(theme: Theme) {
    document.documentElement.setAttribute('data-theme', theme);
}

export function getStoredTheme(): Theme {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme === "light" || storedTheme === "dark" ? storedTheme as Theme : null;
    // Default to dark theme
    return 'dark';
}

type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
    setTheme: (theme: Theme) => void;
};

export const ThemeContext = React.createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setThemeState] = React.useState<Theme>(getStoredTheme() || 'dark');

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setThemeState(newTheme);
    };

    const setTheme = (newTheme: Theme) => {
        setThemeState(newTheme);
    };

    React.useEffect(() => {
        setThemeOnDocument(theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = React.useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}