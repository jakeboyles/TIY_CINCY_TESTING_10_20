'use strict';
 
const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');
const notify = require("gulp-notify");

gulp.task('lint', () => {
    return gulp.src(['js/*.js','!node_modules/**'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError())
        .on("error", notify.onError('Error!'));
});

gulp.task('babel', () => {
    return gulp.src('js/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: ''
    },
  })
})
 
gulp.task('watch',['browserSync'], function () {
  gulp.watch(['./*.html','./js/*.js'], ['lint','babel']);
});