import { PluginOption, defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import { resolve } from "path";
import dts from "vite-plugin-dts";
import tsConfigPaths from "vite-tsconfig-paths";
import { visualizer } from 'rollup-plugin-visualizer';
import tailwindcss from 'tailwindcss';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact({
    babel: {
      presets: [],
      // Your plugins run before any built-in transform (eg: Fast Refresh)
      plugins: [
        ["@babel/plugin-transform-react-jsx",
          {
            "pragma": "h",
            "pragmaFrag": "Fragment",
          }, 'test']
      ],
    }
  }), tsConfigPaths(), dts({
    include: ["src"]
  }), visualizer({
    filename: './dist/stats.html',
    gzipSize: true,
    // include : ['reactcomponentlibrary.js']
  }) as PluginOption],
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
    jsxInject: `import { h, Fragment } from 'preact'`,
  },

  build: {
    lib: {
      entry: resolve("src", "index.ts"),
      name: "reactcomponentlibrary",
      formats: ["es", "cjs", "umd"],
      fileName: (format) => `reactcomponentlibrary.${format}.js`,

    },
    rollupOptions: {
      external: [
        'preact',
        // 'preact/hooks',
        // 'preact/compat',
        // 'preact/debug',
      ],


      output: {
        // // Specify global variable names for external dependencies for UMD and SystemJS formats
        globals: {
          "preact": 'preact',
          // "preact/hooks": 'preactHooks',
          // "preact/compat": 'preactCompat',
          // "preacr/debug": 'preactDebug',

        },
      },
    }
  },

})
