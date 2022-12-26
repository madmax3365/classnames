/// <reference types="vitest" />
import {defineConfig} from "vite";
import typescript from "@rollup/plugin-typescript";

export default defineConfig({
    test: {
        coverage: {
            provider: "c8",
            all: true,
            reporter: ["lcov", "text", "html", "text-summary"],
            reportDir: "coverage",
        }
    },
    build: {
        lib: {
            entry: "src/classnames.ts",
            name: "BidonworkComponentLibrary",
            fileName: "classnames",
            formats: ["es", "cjs"],
        },
        sourcemap: true,
        minify: false,
    },

    plugins: [
        typescript()
    ]
})

