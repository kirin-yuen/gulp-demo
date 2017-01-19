var gulp = require('gulp'),
    jade = require('gulp-jade'),
    uglify = require('gulp-uglify'),
    gulpif = require('gulp-if'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    connect = require('gulp-connect'),
    browserify = require('gulp-browserify');

var env = process.env.NODE_ENV || 'dev';
var outputDir = 'builds/development';

// compile jade to html
gulp.task('jade', function() {
    // /**/ means current folder and subfolder
    return gulp.src('src/templates/**/*.jade')
        .pipe(jade())
        .pipe(gulp.dest(outputDir))
        .pipe(connect.reload()); /* notify live reload whenever files change */

})

// bundle all js to one
gulp.task('js', function() {
    return gulp.src('src/js/main.js') /* entry point file */
        .pipe(browserify({ debug: env === 'dev' })) /* true, browser will includes source map with compiled file */
        .pipe(gulpif(env === 'prod', uglify()))
        .pipe(gulp.dest(outputDir + '/js'))
        .pipe(connect.reload());
})

// compile sass to css
gulp.task('sass', function() {
    return gulp.src('src/css/main.scss')
        .pipe(gulpif(env === 'prod', sass({ outputStyle: 'compressed' }), sass()))
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(outputDir + '/css'))
        .pipe(connect.reload());
});

// watch files change
gulp.task('watch', function() {
    gulp.watch('src/js/**/*.js', ['js']);
    gulp.watch('src/templates/**/*.jade', ['jade']);
    gulp.watch('src/css/**/*.scss', ['sass']);
});

// live reload
gulp.task('connect', function() {
    connect.server({
        root: [outputDir],
        port: 9999
    })
});

gulp.task('default', ['jade', 'js', 'sass', 'watch', 'connect']);
