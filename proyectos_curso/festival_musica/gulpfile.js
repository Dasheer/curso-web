const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function css(callback) {
    src('src/scss/app.scss')     // Identificar el archivo .SCSS a compilar
        .pipe( sass() )     // Compilarlo
        .pipe( dest('build/css') )     // Almacenarlo en el disco duro
    callback();
}

function dev(callback) {

    watch('src/scss/app.scss', css);
    callback();
}

exports.css = css;
exports.dev = dev;