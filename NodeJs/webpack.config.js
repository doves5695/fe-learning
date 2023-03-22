// var webpack = require('webpack');
// var uglifyPlugin = new webpack.optimize.UglifyJsPlugin({minimize: true});
const TerserWebpackPlugin = require('terser-webpack-plugin');
const CommonsChunkPlugin = new Webpack.optimize.CommonsChunkPlugin('common');
module.exports = {
    entry : {index : './src/js/entry.js', index2 : './src/js/entry2.js'},
    output : {
        filename : '[name].js',
        publicPath : __dirname + '/out',
        path : __dirname + '/out'
    },
    module : {
        rules : [
            {test : /.js$/ , use : ['babel-loader']},
            {test : /.css$/ , use : ['style-loader','css-loader']},
            {test : /.(jpg|png|gif|svg)/ , use : ['url-loader?esModule=false&limit=10000&name=/[name].[ext]']}
        ]
    },
    // plugins: [uglifyPlugin],
    optimization : {
        minimize : true,
        minimizer : [new TerserWebpackPlugin ()],
    },
    mode : 'development',
}
//  分离公共模块
