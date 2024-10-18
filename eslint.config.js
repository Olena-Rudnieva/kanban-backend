// import globals from 'globals';
// import pluginJs from '@eslint/js';
// import tseslint from '@typescript-eslint/eslint-plugin';
// import pluginReact from 'eslint-plugin-react';

// export default [
//   {
//     files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
//     languageOptions: {
//       globals: globals.browser,
//       parser: '@typescript-eslint/parser',
//       parserOptions: {
//         ecmaVersion: 2021,
//         sourceType: 'module',
//       },
//     },
//     rules: {
//       'no-unused-vars': 'warn',
//       semi: ['error', 'always'],
//       quotes: ['error', 'single'],
//       '@typescript-eslint/no-explicit-any': 'off',
//       // ...tseslint.configs.recommended.rules,
//     },
//   },
//   {
//     ignores: ['dist/**'],
//   },
//   pluginJs.configs.recommended,
//   pluginReact.configs.flat.recommended,
// ];

import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';

export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
];
