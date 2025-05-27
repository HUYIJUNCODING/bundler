const path = require('path')
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin =  require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        chunkFilename: '[name].js',
        clean: true

    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: '/\.css$/',
                use: 'css-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'app.html'
        })
    ],
    optimization: {
        usedExports: true, // webpack 编译过程中标记模块中被导出但没有被使用的内容为unused,当生成产物时，被标记的变量对应的导出语句会被删除
        minimize: true,
        minimizer: [
            new TerserPlugin(
                {
                    terserOptions: {
                        compress: {
                            unused: true, // 删除未使用代码
                            dead_code: true // 删除死代码
                        }
                    },
                    parallel: true,
                    extractComments: false
                }
            )]
    }
}