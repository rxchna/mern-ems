/*
  - ESLint now uses `eslint.config.mjs` for defining linting rules.
  - This ensures our code follows team conventions and standards.
  - Config uses Airbnb's style guide with custom warnings like for console logs.
*/

/*
  To use this config:
  1. Install dependencies: npm install --save-dev eslint eslint-config-airbnb-base eslint-plugin-import
  2. Create an `eslint.config.mjs` in the root of your `ui` and `api` folders.
  3. In the `ui` or `api` directory, run:
     - npx eslint . (to check lint errors)
     - npx eslint --fix (to autofix issues)
  4. Manually fix remaining errors as needed.
*/

import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

// Set up file path and directory name 
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//Initialize FlatCompat to support older .eslintrc-style configurations.
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [
  {
    ignores: ["node_modules/", "eslint.config.mjs"], //Ignoring certain directories is important because we don't need to lint
  },
  ...compat.extends("airbnb-base"), //extending airbnb base configuration
  {
    rules: {
        "no-console": "warn", //custom rule to show linter warning whenever we have a console.log
    },
  },
];
