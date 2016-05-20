module.exports = {
    entry: {
        app : './client/app.jsx' //Use this to add more builds. Different modules don't have to be together on a single file.
    },
    output: {
        filename: 'client/build/[name].bundle.js', //this is the default name, so you can skip it
        //at this directory our bundle file will be available
    },
    module: {
        loaders: [
            {test: /\.jsx?$/, loader: 'babel-loader'},
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};
