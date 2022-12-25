/**
 * Helper function for compositing className string from multiple classes.
 * This function will filter undefined classNames and will compose output with unique classNames.
 *
 * @example classNames("comp1", "comp2", undefined, "comp1") => "comp1 comp2"
 * @param {...string} classes classNames of component.
 * @return string Composited className string
 */
export default function classNames(...classes: (string | undefined | boolean)[]): string {
    const result = new Set<string>();

    for (const className of classes) {
        if (typeof className !== "string" || !className) {
            continue;
        }

        result.add(className);
    }

    return Array.from(result).join(" ");
}
;


