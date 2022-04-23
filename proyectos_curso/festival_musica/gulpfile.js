const { src, dest, watch, parallel } = require('gulp');

// CSS
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');

// Imágenes
const cache = require('gulp-cache');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const avif = require('gulp-avif');

// Javascript
const terser = require('gulp-terser-js');

function css(done) {
    src('src/scss/**/*.scss')     // Identificar el archivo .SCSS a compilar
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe( sass() )     // Compilarlo
        .pipe( postcss([ autoprefixer(), cssnano() ]) )
        .pipe(sourcemaps.write('.'))
        .pipe( dest('build/css') )     // Almacenarlo en el disco duro
    done();
}

function images(done) {
    const opc = {
        optimizationLevel: 3
    }
    src('src/img/**/*.{png,jpg}')
        .pipe(cache(imagemin(opc)))
        .pipe(dest('build/img'))
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

function javascript(done) {
    src('src/js/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(terser())
        .pipe(sourcemaps.write('.'))
        .pipe(dest('build/js'));
    done();
}

function dev(done) {
    watch('src/scss/**/*.scss', css);
    watch('src/js/**/*.js', javascript);
    done();
}

exports.css = css;
exports.js = javascript;
exports.images = images;
exports.vrWebp = vrWebp;
exports.vrAvif = vrAvif;
exports.dev = parallel(images,vrWebp,vrAvif,javascript,dev);