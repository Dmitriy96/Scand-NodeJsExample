var path = require("path");
var webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [{
    entry: "./app/client/components/",
    output: {
        filename: "./public/js/browser-bundle.js",
        library: 'nodeExample',
        libraryTarget: 'umd'
    },
    //entry: {
    //    app: [
    //        'webpack-dev-server/client?http://localhost:8080/assets/',
    //        'webpack/hot/only-dev-server',
    //        path.join(__dirname, 'app/client/components/index')
    //    ]
    //},
    //output: {
    //    path: path.resolve(__dirname, "build"),
    //    //publicPath: "http://localhost:8080/assets/",
    //    filename: "[name]-bundle.js"
    //},
    //devServer: {
    //    contentBase: path.join(__dirname, 'build'),
    //
    //    // Enable history API fallback so HTML5 History API based
    //    // routing works. This is a good default that will come
    //    // in handy in more complicated setups.
    //    historyApiFallback: true,
    //    hot: true,
    //    inline: true,
    //
    //    // Display only errors to reduce the amount of output.
    //    stats: 'errors-only',
    //
    //    // Parse host and port from env so this is easy to customize.
    //    host: process.env.HOST,
    //    port: process.env.PORT || 3001
    //},
    //plugins: [
    //    new webpack.HotModuleReplacementPlugin(),
    //    new webpack.NoErrorsPlugin(),
    //    new HtmlWebpackPlugin( // Generates index.html
    //        {
    //            template: 'html-loader!public/html/authors2.html', // Load a custom template
    //            inject: false // Inject all scripts into the body
    //        }
    //    )
    //],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react', 'stage-0']
                }
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
                loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            }
        ]
    }
}];


//function plugins() {
//    return [
//        new HtmlWebpackPlugin({ title: 'Example', template: './public/html/authors2.html' })
//    ]
//}
//
//function loaders() {
//    return [
//        {
//            test: /\.jsx?$/,
//            loader: 'babel',
//            exclude: /node_modules/,
//            query: {
//                presets: ['es2015', 'react', 'stage-0']
//            }
//        },
//        {
//            test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
//            loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
//        },
//        {
//            test: /\.css$/,
//            loader: 'style-loader!css-loader'
//        },
//        {
//            test: /\.less$/,
//            loader: 'style-loader!css-loader!less-loader'
//        }
//    ]
//}
//
//function entry() {
//    return { app: './app/client/components/'}
//}
//
//function output() {
//    return {
//        filename: "./public/js/browser-bundle.js",
//        library: 'nodeExample',
//        libraryTarget: 'umd',
//        publicPath: '/'
//    }
//}
//
///* config */
//module.exports = {
//    entry: entry(),
//    output: output(),
//    module: { loaders: loaders() },
//    devServer: { historyApiFallback: true },
//    plugins: plugins()
//};