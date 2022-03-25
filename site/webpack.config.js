const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const paths = {
    src: path.join(__dirname, 'src'),
    dst: path.join(__dirname, 'dst'),
    assets: path.join(__dirname, 'src/assets')
};

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

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';
    const mode = isProduction ? 'production' : 'development';
    const devtool = isProduction ? false : 'inline-source-map';

    return {
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
                    test: /\.(scss)$/,
                    use: [
                        { loader: 'style-loader' },
                        { loader: 'css-loader' },
                        {
                            loader: 'postcss-loader',
                            options: {
                                postcssOptions: {
                                    plugins: function () {
                                        return [
                                            require('autoprefixer')
                                        ];
                                    }
                                }
                            }
                        },
                        { loader: 'sass-loader' }
                    ]
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
            new CopyWebpackPlugin({
                patterns: [
                    { from: path.resolve(paths.assets, 'photo.jpg'), to: path.resolve(paths.dst) }
                ]
            }),
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
            extensions: ['.js', '.jsx', '.ts', '.tsx']
        },
        optimization: getOptimization(isProduction)
    };
}