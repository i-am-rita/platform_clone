const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports ={
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index.bundle.js'
    },
    devServer: {
        port: 3010,
        // watchContentBase: true,
    },

    module: {
        rules: [
            //handles our react code with js/jsx extensions
            {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/, //I don't want to go through my node modules and load them in they should already be compiled and ready to use  
            use: {
                loader: 'babel-loader'
            },
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [new MiniCssExtractPlugin()],
}