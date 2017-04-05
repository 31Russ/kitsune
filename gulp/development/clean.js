const gulp = require('gulp');
const rimraf = require('rimraf');
const config = require('../config').clean;

gulp.task('clean:styles', cb => rimraf(config.styles, cb));
gulp.task('clean:pug', cb => rimraf(config.pug, cb));
gulp.task('clean:all', cb => rimraf(config.all, cb));