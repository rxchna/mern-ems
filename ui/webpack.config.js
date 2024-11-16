const path = require('path');
module.exports = {
    mode: 'development',
    entry: './src/App.jsx',
    output: {
        filename: 'app.bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/, // Exclude node_modules for faster builds
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'], // Add necessary presets
                    },
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'], // Add '.jsx' to the list of extensions
    },
};