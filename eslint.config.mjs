import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    ...compat.extends("next/core-web-vitals", "next/typescript"),
    {
        ignores: [".next/**", "node_modules/**", "public/**", "next-env.d.ts"],
    },
    {
        languageOptions: {
            ecmaVersion: 2020,
        },
    },
    {
        files: ["*.css", "*.pcss", "*.postcss"],
    },
];

export default eslintConfig;
