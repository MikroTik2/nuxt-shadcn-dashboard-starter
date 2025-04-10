import antfu from '@antfu/eslint-config';

export default antfu({
    vue: true,
    // typescript: true,
    formatters: {
        css: true,
        html: true,
        json: true,
        markdown: 'prettier',
    },
    stylistic: {
        indent: 4,
        quotes: 'single',
        semi: true,
    },
}, {
    rules: {
        'unused-imports/no-unused-vars': 1,
        'ts/no-explicit-any': 1,
        'no-undef': 0,
        'yaml/indent': 0,
        'vue/multi-word-component-names': 0,
        'symbol-description': 0,
        'node/prefer-global/process': 0,
    },
});
