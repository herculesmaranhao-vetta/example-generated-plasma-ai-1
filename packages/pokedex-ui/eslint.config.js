import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import aiGuard from "eslint-plugin-ai-guard";
import llmCore from "eslint-plugin-llm-core";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist", "coverage", "node_modules"] },
  js.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2022,
      globals: globals.browser,
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    settings: { react: { version: "detect" } },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "ai-guard": aiGuard,
    },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
      "react/forbid-component-props": "off",
      "react/forbid-dom-props": "off",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-unsafe-assignment": "error",
      "@typescript-eslint/no-unsafe-member-access": "error",
      "@typescript-eslint/no-unsafe-return": "error",
      "@typescript-eslint/no-unsafe-call": "error",
      "@typescript-eslint/explicit-module-boundary-types": "warn",
      "no-restricted-imports": [
        "error",
        {
          paths: [
            {
              name: "antd",
              message:
                "Import antd only from src/components/atoms/** or theme/bootstrap (antdTheme.ts, App.tsx, index.tsx). Use module-local wrappers elsewhere.",
            },
            {
              name: "@ant-design/icons",
              message:
                "Import @ant-design/icons only from src/components/atoms/** or theme/bootstrap. Use module-local wrappers elsewhere.",
            },
          ],
          patterns: [
            {
              group: ["@ant-design/icons/*"],
              message:
                "Import @ant-design/icons only from src/components/atoms/** or theme/bootstrap.",
            },
          ],
        },
      ],
      ...aiGuard.configs.security.rules,
    },
  },
  {
    files: [
      "src/components/atoms/**/*.{ts,tsx}",
      "src/components/molecules/Card/Card.tsx",
      "src/components/molecules/Card/Card.styles.ts",
      "src/components/molecules/EmptyState/EmptyState.tsx",
      "src/components/molecules/Select/Select.tsx",
      "src/components/molecules/SearchInput/SearchInput.tsx",
      "src/styles/antdTheme.ts",
      "src/App.tsx",
      "src/index.tsx",
      ".storybook/preview.ts",
      ".storybook/preview.tsx",
    ],
    rules: {
      "no-restricted-imports": "off",
    },
  },
  ...llmCore.configs.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    rules: {
      // Disable overly strict naming rules for our convention (Component.types.ts exports ComponentProps)
      "llm-core/filename-match-export": "off",
      "llm-core/no-magic-numbers": "off",
      "llm-core/max-function-length": "off",
      "llm-core/explicit-export-types": "off",
      "llm-core/max-file-length": [
        "error",
        { max: 300, skipBlankLines: true, skipTestFiles: true },
      ],
      "llm-core/max-params": [
        "error",
        { max: 4, maxConstructor: 5, maxInternal: 4 },
      ],
      "llm-core/no-inline-disable": "warn",
      "llm-core/no-hallucinated-local-imports": "error",
      "llm-core/no-hallucinated-package-imports": "error",
      "llm-core/no-empty-catch": "off",
      "@typescript-eslint/no-unnecessary-type-assertion": "off",
      "@typescript-eslint/no-floating-promises": "off",
      "@typescript-eslint/no-misused-promises": "off",
      "no-nested-ternary": "off",
    },
  },
  {
    files: ["**/*.tsx"],
    rules: {
      "llm-core/no-exported-function-expressions": "off",
    },
  },
  eslintConfigPrettier,
);