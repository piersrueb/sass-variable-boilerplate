//  requires

const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssbeautify = require('gulp-cssbeautify');

//  sass and vendor prefixes

const autoprefixerOptions = {
    browsers: [
        'last 2 version',
        'safari 5',
        'ie 7', 'ie 8', 'ie 9',
        'opera 12.1',
        'ios 6', 'android 4'
    ]
};

gulp.task('styles', function() {
    gulp.src('./*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(gulp.dest('compiled/'))
});

//  css beautify

gulp.task('cssbeautify', function() {
    return gulp.src('./compiled/*.css')
        .pipe(cssbeautify())
        .pipe(gulp.dest('./compiled/'));
});

//  run tasks + watch

gulp.task('default', ['styles', 'cssbeautify', 'watch']);
gulp.task('watch', function() {
    gulp.watch('./*.scss',['styles']);
    gulp.watch('./compiled/*.css', ['cssbeautify']);
})
