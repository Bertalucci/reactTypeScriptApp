/* Типизация параметра mods */
type Mods = Record<string, boolean | string>

/* Кастомная функция для удобной работы с добавлением css-классов: устанавливает класс и моды для него
* в зависимости от переданного мода. Также может добавлять дополнительные классы (без модов).
* @param cls css-класс, например, 'remove-btn'
* @param mods моды, например, {hovered: true, selectable: true, red: true}
* @param additional массив доп классов (не зависящих от условий)
* */
export function classNames(className: string, mods: Mods, additional: string[]): string {
    return [
        className,
        ...additional,
        ...Object.entries(mods)
            .filter(([className, value]) => Boolean(value))
            .map(([className, value]) => className)
    ].join(' ');
}