const { src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function css(callback) {
    src('src/scss/app.scss')     // Identificar el archivo .SCSS a compilar
        .pipe( sass() )     // Compilarlo
        .pipe( dest('build/css') )     // Almacenarlo en el disco duro
    callback();
}

exports.css = css;
