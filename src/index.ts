import { Plugin } from 'rollup'
import { emptyDir } from 'fs-extra'

export default function cleanupDir(): Plugin {
    return {
        name: 'clean-dir',
        async generateBundle({ dir }) {
            if (dir) {
                await emptyDir(dir)
            }
        },
    }
}