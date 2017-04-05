const gulp = require('gulp');
const path = require('path');
const pugInheritance = require('gulp-pug-inheritance');
const pug = require('gulp-pug');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');
const changed = require('gulp-changed');
const cached = require('gulp-cached');
const gulpif = require('gulp-if');
const filter = require('gulp-filter');
const config = require('../config').pug;

gulp.task('pug', function () {
    return gulp.src(config.src)
        .pipe(
            plumber({
                errorHandler: notify.onError({
                    title: 'Error in Style task.',
                    message: '<%= error.message %>',
                    sound: 'Notification.IM',
                    onLast: true,
                    wait: true
                })
            })
        )
        .pipe(changed('dist', {
            extension: '.html'
        }))

        .pipe(gulpif(global.isWatching, cached('pug')))

        .pipe(pugInheritance({
            basedir: 'app',
            skip: 'node_modules'
        }))

        .pipe(filter(function (file) {
            // Added views to exclude folder from building.
            return !/\/_/.test(file.path) && !/^_/.test(file.relative) && !/views/.test(file.relative);
        }))

        .pipe(pug({
            pretty: true
        }))

        //save all the files
        .pipe(gulp.dest(config.dest))
        .pipe(
            notify({
                title: 'Pug',
                message: 'Pug templates transformation done !',
                icon: path.join(__dirname, '../', 'pug.png'),
                sound: false,
                onLast: true
            })
        );
});

gulp.task('setWatch', function () {
    global.isWatching = true;
});