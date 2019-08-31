const gulp = require('gulp');
const fs = require('fs');
const rename = require('gulp-rename');
const ttf2woff = require('gulp-ttf2woff');
const ttf2eot = require('gulp-ttf2eot');
const ttf2woff2 = require('gulp-ttf2woff2');
const ttf2svg = require('gulp-ttf-svg');
const ttf2otf = require('./ttf2otf');


// npm i gulp-otf2ttf DELETE

gulp.task('ttf2otf', function () {
    gulp.src(['fonts/*.ttf'])
        .pipe(rename(function (path) {
            path.extname = '.otf'
        }))
        .pipe(gulp.dest('fonts/'));
});
gulp.task('ttf2svg', function () {
    gulp.src(['fonts/*.ttf'])
        .pipe(ttf2svg())
        .pipe(gulp.dest('fonts/'));
});

gulp.task('ttf2woff2', function () {
    gulp.src(['fonts/*.ttf'])
        .pipe(ttf2woff2())
        .pipe(gulp.dest('fonts/'));
});
gulp.task('ttf2woff', function () {
    gulp.src(['fonts/*.ttf'])
        .pipe(ttf2woff())
        .pipe(gulp.dest('fonts/'));
});
gulp.task('ttf2eot', function () {
    gulp.src(['fonts/*.ttf'])
        .pipe(ttf2eot())
        .pipe(gulp.dest('fonts/'));
});
gulp.task('generate',
    gulp.parallel('ttf2svg', 'ttf2woff2', 'ttf2woff', 'ttf2eot','ttf2otf')
);
