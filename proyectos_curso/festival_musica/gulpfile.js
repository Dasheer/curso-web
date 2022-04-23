const { src, dest, watch, parallel } = require('gulp');

// CSS
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');

// Imágenes
const webp = require('gulp-webp');

function css(done) {
    src('src/scss/**/*.scss')     // Identificar el archivo .SCSS a compilar
        .pipe(plumber())
        .pipe( sass() )     // Compilarlo
        .pipe( dest('build/css') )     // Almacenarlo en el disco duro
    done();
}

function vrWebp (done) {

    const opc = {
        quality: 50
    };

    src('src/img/**/*.{png,jpg}')
        .pipe(webp(opc))
        .pipe(dest('build/img'))
    done();
}

function dev(done) {
    watch('src/scss/**/*.scss', css);
    done();
}

exports.css = css;
exports.vrWebp = vrWebp;
exports.dev = parallel(vrWebp,dev);