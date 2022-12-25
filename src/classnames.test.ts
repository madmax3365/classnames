import {describe, expect, it} from "vitest";
import classNames from "./classnames";


describe("classNames", () => {
    it("Should compose string", () => {
        const className = classNames("class1", "class2", "class3");
        expect(className).toBe("class1 class2 class3");
    });
    it("Should exclude duplicate classNames", () => {
        const className = classNames("class1", "class2", "class3", "class2", "class1");
        expect(className).toBe("class1 class2 class3");
    });
    it("Should exclude undefined classNames", () => {
        const className = classNames("class1", undefined, "class2", undefined, "class3");
        expect(className).toBe("class1 class2 class3");
    });
});
