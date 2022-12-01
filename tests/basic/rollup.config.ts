import { cleanupDir } from '../../src/index'
import { join } from 'path'
import { RollupOptions } from 'rollup'

const fixture = (name) => join('tests/basic', name)

const options: RollupOptions = {
  input: fixture('background.js'),
  output: {
    dir: fixture('dest'),
    format: 'esm',
  },
  plugins: [cleanupDir()],
}

export default options;