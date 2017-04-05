const gulp = require('gulp');
const path = require('path');
const plumber = require('gulp-plumber');
const changed = require('gulp-changed');
const notify = require('gulp-notify');
const config = require('../config').images;

gulp.task('images', () => {
    gulp
        .src(config.src)
        .pipe(plumber())
        .pipe(changed(config.dest))
        .pipe(gulp.dest(config.dest))
        .pipe(
            notify({
                title: 'Images',
                message: 'Copying Images Done !',
                icon: path.join(__dirname, '../', 'image.png'),
                sound: false,
                onLast: true
            })
        );
});