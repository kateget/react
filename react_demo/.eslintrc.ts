const OFF = 0;
const WARN = 1;
const ERROR = 2;

const config = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:unicorn/recommended',
    'plugin:promise/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    // 'prettier/@typescript-eslint',
    // 'prettier/react',
    // 'prettier/unicorn',
    // 'stylelint-config-prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.tsx', '.ts', '.js', '.json'],
      },
    },
  },
  plugins: ['react', 'unicorn', 'promise', '@typescript-eslint'],
  rules: {
    // 具体添加的其他规则大家可查看我的 github 查看
    // https://github.com/vortesnail/react-ts-quick-starter/blob/master/.eslintrc.js
  },
};

export default config;
