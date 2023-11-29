module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 'latest',
    },
    extends: [
        'plugin:vue/recommended',
        'eslint:recommended',
        '@vue/typescript/recommended',
        'prettier',
    ],
    ignorePatterns: ['src/assets/lib', 'node_modules'],
    plugins: ['@typescript-eslint', 'prettier'],
    rules: {
        'no-console': 'warn',
        'no-debugger': 'warn',
        'prettier/prettier': [
            'warn',
            {
                endOfLine: 'auto',
            },
        ],
        'vue/no-multiple-template-root': 'off',
        'vue/no-v-model-argument': 'off',
        'vue/html-self-closing': [
            'warn',
            {
                html: {
                    void: 'any',
                    normal: 'always',
                    component: 'always',
                },
                svg: 'always',
                math: 'always',
            },
        ],
        'vue/no-custom-modifiers-on-v-model': 'off',
        'vue/no-v-for-template-key': 'off',
        '@typescript-eslint/no-duplicate-enum-values': 'off',
        'vue/multi-word-component-names': 'off',
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: 'typeLike',
                format: ['PascalCase'],
            },
        ],
    },
    overrides: [
        {
            files: ['**/tests/unit/**/*.spec.{j,t}s?(x)'],
            env: {
                jest: true,
            },
        },
    ],
};
