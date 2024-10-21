const path = require("path");

module.exports = {
    entry: "./src/index.js",
    mode: 'production',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js",
        libraryTarget: "commonjs2",
    },
    externals: {
        react: 'commonjs react',  // Treat react as an external dependency
        'react-dom': 'commonjs react-dom',  // Treat react-dom as an external dependency
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
};
