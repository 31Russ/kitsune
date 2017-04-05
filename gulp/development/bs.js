const gulp = require('gulp');
const bs = require('browser-sync');
const config = require('../config').browsersync.development

gulp.task('bs', ['build'], () => {
    bs(config);
});