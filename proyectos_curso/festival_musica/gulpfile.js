const { src, dest, watch, parallel } = require('gulp');

// CSS
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');

// Imágenes
const cache = require('gulp-cache');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const avif = require('gulp-avif');

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

function vrAvif (done) {
    const opc = {
        quality: 50
    };
    src('src/img/**/*.{png,jpg}')
        .pipe(avif(opc))
        .pipe(dest('build/img'))
    done();
}

function images(done) {
    const opc = {
      optimizationLevel: 3
    };
    src('src/img/**/*.{png,jpg}')
        .pipe(cache(imagemin(opc)))
        .pipe(dest('build/img'))
    done();
}

function dev(done) {
    watch('src/scss/**/*.scss', css);
    done();
}

exports.css = css;
exports.images = images;
exports.vrWebp = vrWebp;
exports.vrAvif = vrAvif;
exports.dev = parallel(images,vrWebp,vrAvif,dev);