/**
 * Кастомный хук для работы с переключением темы.
 */

import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContext";
import {useContext} from "react";

/** Типизация для хука */
interface UseThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}

export function useTheme(): UseThemeResult {
    /** Хук useContext позволяет получить доступ к нужному контексту */
    const {theme, setTheme} = useContext(ThemeContext);

    /** Функция переключения темы и сохранения текущей темы в localStorage */
    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return {theme, toggleTheme};
}