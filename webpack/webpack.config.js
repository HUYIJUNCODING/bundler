const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ESLintPlugin = require('eslint-webpack-plugin');


module.exports = {
    // watch: true, // 开启后，会时时监听本地文件的修改，当有修改会自动编译
    mode: 'development',
    entry: {
        index: './src/index.js',
        main: './src/math.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'js/[name].js',
        chunkFilename: 'js/[name].js',
        clean: true

    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }),
        new ESLintPlugin({
            context: './src',
            extensions: ['js', 'jsx', 'ts'],
            // fix: true,
            failOnError: false
        })
        // new BundleAnalyzerPlugin()
    ],
    devServer: {
    },
    optimization: {
        usedExports: true, // webpack 编译过程中标记模块中被导出但没有被使用的内容为unused,当生成产物时，被标记的变量对应的导出语句会被删除
        // minimize: true,
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
            ),
            new CssMinimizerPlugin()
        ],
        splitChunks: {
            cacheGroups: {
                defaultVendors: {
                    name: 'chunk-vendors',
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    chunks: 'initial'

                },
                common: {
                    name: 'chunk-common',
                    minChunks: 2,
                    priority: -12,
                    chunks: 'initial',
                    reuseExistingChunk: true
                }
            }

        }
    }
}