module.exports = {
    babel: {
        presets: ['@babel/preset-env', '@babel/preset-react'],
        plugins: ['@babel/plugin-transform-react-jsx', '@babel/plugin-proposal-class-properties'],
        // loaderOptions: {
        //     /* Any babel-loader configuration options: https://github.com/babel/babel-loader. */
        // },
        loaderOptions: (babelLoaderOptions) => babelLoaderOptions
    }
};
