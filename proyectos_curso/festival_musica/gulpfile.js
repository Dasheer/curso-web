const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');

function css(callback) {
    src('src/scss/app.scss')     // Identificar el archivo .SCSS a compilar
        .pipe(plumber())
        .pipe( sass() )     // Compilarlo
        .pipe( dest('build/css') )     // Almacenarlo en el disco duro
    callback();
}

function dev(callback) {
    watch('src/scss/**/*.scss', css);
    callback();
}

exports.css = css;
exports.dev = dev;