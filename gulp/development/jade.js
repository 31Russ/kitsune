'use strict';
var gulp = require('gulp');
var jadeInheritance = require('gulp-pug-inheritance');
var jade = require('gulp-pug');
var changed = require('gulp-changed');
var cached = require('gulp-cached');
var gulpif = require('gulp-if');
var filter = require('gulp-filter');

gulp.task('jade', ['clean:pug'], function () {
    return gulp.src('app/**/*.{jade,pug}')

        //only pass unchanged *main* files and *all* the partials 
        .pipe(changed('dist', {
            extension: '.html'
        }))

        //filter out unchanged partials, but it only works when watching 
        .pipe(gulpif(global.isWatching, cached('jade')))

        //find files that depend on the files that have changed 
        .pipe(jadeInheritance({
            basedir: 'app'
        }))

        //filter out partials (folders and files starting with "_" ) 
        .pipe(filter(function (file) {
            return !/\/_/.test(file.path) && !/^_/.test(file.relative);
        }))

        //process jade templates 
        .pipe(jade({
            pretty: true
        }))

        //save all the files 
        .pipe(gulp.dest('dist'));
});

gulp.task('setWatch', function () {
    global.isWatching = true;
});

gulp.task('watch', ['setWatch', 'pug'], function () {

    gulp.watch('app/**/*.{jade,pug}', ['jade']);
});