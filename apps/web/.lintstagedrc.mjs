import path from 'node:path'

// monorepo need add `--dir` flag
const buildEslintCommand = (filenames) =>
  `next lint --dir src --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`

const prettierFixCommand = (filenames) =>
  `pnpm prettier --write ${filenames.join(' ')}`

/**
 * @type {import('lint-staged').Config}
 */
export default {
  // Type check TypeScript files
  '**/*.(ts|tsx)': () => 'pnpm tsc --noEmit',
  // ESlint and Prettier
  '**/*.(md|json|ts|tsx|js|jsx)': [buildEslintCommand, prettierFixCommand],
}
