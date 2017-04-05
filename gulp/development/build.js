const gulp = require('gulp');
const runSequence = require('run-sequence');

gulp.task('build', cb => {
    runSequence(
        'clean:all', ['setWatch', 'pug', 'styles', 'webpack', 'images'], cb
    );
});