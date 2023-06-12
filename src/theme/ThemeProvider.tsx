/** Провайдер оборачивает нужную часть приложения и тем самым предоставляет этой части доступ к соответствующему контексту */

import React, {FC, PropsWithChildren, useMemo, useState} from 'react';
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContext";

/** Приведение строки, которую возвращает localStorage к кастомному типу Theme
 * Если localStorage пустой, возвращаем Theme.LIGHT как дефолтную тему.
 */
const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

const ThemeProvider: FC<PropsWithChildren> = ({children}) => {

    /** По дефолту используем тему, сохраненную в localStorage или светлую */
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    /** Использование хука useMemo позволяет восстанавливать объект из памяти, а не создавать его всякий раз с нуля */
    const defaultProps = useMemo(() => ({
        theme: theme,
        setTheme: setTheme
    }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;