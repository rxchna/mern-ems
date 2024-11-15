/*
- Latest version of eslint uses eslint.config.mjs files to define 
the linting rules applied in our codebase. 
- These rules help ensure our code adheres to conventions and 
standards set by the development team 
- This configuration sets up a base standard for JavaScript code 
using Airbnb's popular style guide.We're also including some 
project-specific customizations such as warnings for console.logs 
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
    ignores: ["node_modules/", "public/", "eslint.config.mjs"], //Ignoring certain directories is important because we don't need to lint
  },
  ...compat.extends("airbnb-base"), //extending airbnb base configuration
  {
    rules: {
        "no-console": "warn", //custom rule to show linter warning whenever we have a console.log
    },
  },
];
