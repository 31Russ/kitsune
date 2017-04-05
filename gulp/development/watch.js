const gulp = require('gulp');
const config = require('../config').watch;

gulp.task('watch', ['bs'], () => {
    gulp.watch(config.styles, ['styles']);
    gulp.watch(config.pug, ['pug']);
    gulp.watch(config.scripts, ['webpack']);
});