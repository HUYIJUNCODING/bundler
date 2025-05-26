const path = require('path')

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        chunkFilename: '[name].js',
        clean: true
        // module: true,
        // library: {
        //     type: 'module',            // 以 ESM 形式导出 library
        // }

    },
    // experiments: {
    //     outputModule: true
    // },
    optimization: {
        usedExports: true, // webpack 编译过程中标记模块中被导出但没有被使用的内容为unused,当生成产物时，被标记的变量对应的导出语句会被删除
        minimize: true,
        // minimizer: [
        //     new TerserPlugin(
        //         {
        //             terserOptions: {
        //                 compress: {
        //                     arrows: false,
        //                     collapse_vars: false,
        //                     comparisons: false,
        //                     computed_props: false,
        //                     hoist_funs: false,
        //                     hoist_props: false,
        //                     hoist_vars: false,
        //                     inline: false,
        //                     loops: false,
        //                     negate_iife: false,
        //                     properties: false,
        //                     reduce_funcs: false,
        //                     reduce_vars: false,
        //                     switches: false,
        //                     toplevel: false,
        //                     typeofs: false,
        //                     booleans: true,
        //                     if_return: true,
        //                     sequences: true,
        //                     unused: true,
        //                     conditionals: true,
        //                     dead_code: true,
        //                     evaluate: true
        //                 },
        //                 mangle: {
        //                     safari10: true
        //                 }
        //             },
        //             parallel: true,
        //             extractComments: false
        //         }
        //     )]
    }
}