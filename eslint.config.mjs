import withNuxt from './.nuxt/eslint.config.mjs';
import prettier from 'eslint-plugin-prettier';

export default withNuxt({
       plugins: {
              prettier: prettier,
       },
       rules: {
              'prettier/prettier': 'off',
              'vue/multi-word-component-names': 'off',
              'vue/require-default-prop': 'off',
              '@typescript-eslint/no-explicit-any': 'off',
              '@typescript-eslint/no-unused-vars': 'off',
       },
});
