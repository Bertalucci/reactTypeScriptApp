/**
 * Контекст необходим для доступа к теме из всех частей приложения.
 */

import {createContext} from "react";

/** Перечисление доступных в контексте тем */
export enum Theme {
    DARK = "dark",
    LIGHT = "light"
}

/** Интерфейс для обозначения типа данного контекста */
export interface ThemeContextProps {
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
}

/** Создаем контекст, используя встроенный механизм React.createContext */
export const ThemeContext = createContext<ThemeContextProps>({})

/** Переменная, необходимая для сохранения значения выбранной темы (например, если браузер будет перезагружен) */
export const LOCAL_STORAGE_THEME_KEY = 'theme';