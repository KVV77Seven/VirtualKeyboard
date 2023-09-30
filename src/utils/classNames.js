export function classNames(
    className,
    otherClassNames = [],
    ) {
    return [className, ...otherClassNames].join(' ');
}