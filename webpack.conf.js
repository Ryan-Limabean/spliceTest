var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        'app-vue': ['babel-polyfill','./src/assets/js/main.js', './src/assets/scss/app.scss'],
    },
    output: {
        path: path.resolve(__dirname, './dist/assets/'),
        publicPath: '/dist/assets/',
        filename: 'js/[name].js',
    },

    module: {

        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
                        // the "scss" and "sass" values for the lang attribute to the right configs here.
                        // other preprocessors should work out of the box, no loader config like this necessary.
                        'scss': 'vue-style-loader!css-loader!sass-loader',
                        'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
                        'css': 'vue-style-loader!css-loader'
                    }
                    // other vue-loader options go here
                }
            },

            {
                test: /\.js$/,
                exclude:  /node_modules(?!(\/|\\)foundation-sites)/,
                // include: /node_modules\/foundation-sites/,
                loader: 'babel-loader?cacheDirectory',
                options: {
                    "presets": [
                        ["env", {
                            "targets": {
                                "browsers": ["last 3 versions", "safari > 6"]
                            }
                        }]
                    ],
                    "plugins": [
                        ["transform-runtime", {
                            "helpers": false,
                            "polyfill": false,
                            "regenerator": true,
                            "moduleName": "babel-runtime"
                        }]
                    ]
                },
                // exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: 'img/[name].[ext]?[hash]'
                }
            },
            {
                test: /\.css$/,
                loader: 'vue-style-loader!css-loader'
            },
            {
                test: /\.scss$/,
                use: [{
                        loader: 'file-loader',
                        options: {
                            name: '[name].css',
                            outputPath: 'css/'
                        }
                    },
                    {
                        loader: 'extract-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            url: false,
                            minimize: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                require('autoprefixer')({
                                    browsers: ['> 0.05%', 'IE 7'],
                                    cascade: false
                                })
                            ]
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            includePaths: [

                                "plugins/Backend/assets/scss",
                                "node_modules/foundation-sites/scss",
                                "node_modules/motion-ui/src"
                            ]
                        }
                    },
                    {
                        loader: 'import-glob-loader'
                    }
                ]
            },
            {
                test: require.resolve('jquery'),
                use: [{
                    loader: 'expose-loader',
                    options: 'jQuery'
                }, {
                    loader: 'expose-loader',
                    options: '$'
                }]
            }
        ],

    },

    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            'vue': 'vue/dist/vue.esm.js',
        }
    },

    plugins: [

    ],

    devServer: {
        historyApiFallback: true,
        noInfo: true
    },
    performance: {
        hints: false
    },

    watchOptions: {
        ignored: /node_modules/,
        poll: true
    },
}