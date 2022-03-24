module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: [
        'react',
        'react-hooks',
        '@typescript-eslint/eslint-plugin'
    ],
    env: {
        browser: true,
        node: true,
        jest: true,
        jasmine: true,
        es6: true
    },
    parserOptions: {
        sourceType: 'module',
        tsconfigRootDir: __dirname,
        ecmaVersion: 2018,
        ecmaFeatures: {
            modules: true,
            jsx: true
        },
        project: './tsconfig.json'
    },
    extends: ['plugin:@typescript-eslint/recommended'],
    rules: {
        // 0 - disable
        // 1 - warning
        // 2 - error
        '@typescript-eslint/explicit-module-boundary-types': 0,  // allow to not declare return types of functions since typescript can infer them most of the time
        'semi': 'off',
        '@typescript-eslint/semi': 2,
        'no-trailing-spaces': 2,
        '@typescript-eslint/no-explicit-any': 2,
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 2,
        'indent': 'off',
        '@typescript-eslint/indent': ['error', 4],
        'quotes': 'off',
        '@typescript-eslint/quotes': ['error', 'single'],
        'arrow-spacing': 2,
        'object-curly-spacing': ['error', 'always'],
        'array-bracket-spacing': ['error', 'never']
    }
};
