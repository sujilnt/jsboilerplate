const autoprefixer = require('autoprefixer');

module.exports = {
    plugins: [
        //   'postcss-import': {},
        autoprefixer({ browsers: ['last 2 version', 'ie 9'] })
        //   'cssnano': {}
    ]
}
