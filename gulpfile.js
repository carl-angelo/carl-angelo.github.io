const   gulp = require('gulp'),
        sass = require('gulp-sass'),
        bourbon = require('node-bourbon'),
        minifier = require('gulp-csso'),
        babel = require('gulp-babel'),
        minifyJS = require('gulp-minify'),
        browserSync = require('browser-sync').create(),        
        cssbeauty = require('gulp-cssbeautify');


gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        browser: 'google chrome'
    })
});  

gulp.task('html', function() {
    return gulp.src('./*.html')
        .pipe(browserSync.stream())
});

gulp.task('css', function() {
    return gulp.src('./assets/sass/*.sass')
        .pipe(sass({
            includePaths: bourbon.includePaths
        }))
        .pipe(cssbeauty())
        // .pipe(minifier())
        .pipe(gulp.dest('./assets/css'))
        .pipe(browserSync.stream())
});

gulp.task('js', function() {
    return gulp.src('./assets/js/*.js')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(minifyJS())
        .pipe(gulp.dest('./assets/js/dist'))
        .pipe(browserSync.stream())
});

gulp.task('watch', ['browser-sync'], function() {
    gulp.watch('./assets/sass/*.sass', ['css']);
    gulp.watch('./assets/js/*.js', ['js']);
    gulp.watch('./*.html', ['html']);
});

gulp.task('default', ['watch', 'css', 'js','html']);