import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    ...compat.extends("next/core-web-vitals", "next/typescript", "plugin:css-modules/recommended", "eslint-config-postcss"),
    {
        ignores: [".next/**", "node_modules/**", "public/**", "next-env.d.ts"],
        plugins: ["@eslint/css"],
        parserOptions: {
            ecmaVersion: 2020, // Or your target ECMAScript version
        },
        env: {
            node: true, // If PostCSS config files are Node.js modules
        },
        overrides: [
            {
                files: ["*.css", "*.pcss", "*.postcss"], // Target your PostCSS files
                customSyntax: "@eslint/css", // Use the custom syntax for CSS
                rules: {
                    // Specific rules for PostCSS files, e.g., if you use nested rules
                },
            },
        ],
    },
];

export default eslintConfig;
