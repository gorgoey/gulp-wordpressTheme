var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps');

    gulp.task('browser-sync', function() {
        var files = [
            './style.css',
            './*.php'
        ];

        browserSync.init(files, {
            proxy: "http://localhost/wordpress/"
        });
    });

    gulp.task('sass', function(){
        return gulp.src('sass/*.scss', { sourcemap:true })
            .pipe(sourcemaps.init())
            .pipe(sass({
                'outputStyles':'compressed'
            }))
            .pipe(sourcemaps.write('./maps'))
            .pipe(gulp.dest('./'))
            .pipe(browserSync.stream());
    });

    gulp.task('default', ['sass' , 'browser-sync'],  function(){
        gulp.watch("sass/**/*.scss", ['sass']);
    })