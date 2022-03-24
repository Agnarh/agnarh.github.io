const path = require('path');

const isProduction = typeof NODE_ENV !== 'undefined' && NODE_ENV === 'production';
const mode = isProduction ? 'production' : 'development';
const devtool = isProduction ? false : 'inline-source-map';

// const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');


const getOptimization = isProduction => {
    const config = {
        splitChunks: {
            name: 'lib',
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'all'
                }
            }
        }
    };

    if (isProduction) {
        config.minimizer = [
            new OptimizeCssAssetsPlugin(),
            new TerserWebpackPlugin()
        ];
    }

    return config;
};

module.exports = {
    entry: './src/index.tsx',
    target: 'web',
    mode,
    devtool,
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    compilerOptions: {
                        sourceMap: !isProduction,
                    }
                }
            },
            {
                test: /\.(s[ac]ss|css)$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        path: path.resolve(path.join(__dirname, 'dst')),
        filename: '[name]-[hash]-bundle.js',
        chunkFilename: '[name]-[hash]-chunk.js',
        libraryTarget: 'umd'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name]-[hash].css'
        }),
        new ESLintPlugin({
            extensions: ['ts', 'tsx'],
            failOnError: isProduction
        })
    ],
    resolve: {
        // alias: {
        //     'common': path.resolve(paths.common, ''),
        //     'store': path.resolve(paths.store, ''),
        // },
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    optimization: getOptimization(isProduction)
}