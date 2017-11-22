import autoprefixer from 'autoprefixer'
import pixrem from 'pixrem'

import path from 'path'

const css_loader = {
    loader: 'css-loader',
    options: {
        modules: true,
        localIdentName: '[name].[local]',
        importLoaders: 1,
    },
}

const postcss_loader = {
    loader: 'postcss-loader',
    options: {
        plugins: function () {
            return [
                autoprefixer('last 10 versions', 'ie 10'),
                pixrem({
                    rootValue: 10,
                }),
            ]
        }
    }
}

const plugins = [

]

const config = {

    context: path.resolve(__dirname, './src'),

    entry: {
        app: './app.js',
    },

    output: {
        filename: '[name].bundle.js',
        path:  path.resolve(__dirname, 'dist/'),
    },

    devtool: 'source-map',

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: [{
                    loader: 'babel-loader',
                }],
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    css_loader,
                    postcss_loader,
                ],
            },
            {
                test: /\.less/,
                use: [
                    'style-loader',
                    css_loader,
                    postcss_loader,
                    'less-loader',
                ],
            },
        ]

    },
    plugins,
}

module.exports = config
