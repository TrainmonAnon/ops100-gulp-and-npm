// write your code here
const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const nodemon = require('gulp-nodemon');

const changed = require('gulp-changed');
const imagemin = require('gulp-imagemin');

const livereload = require('gulp-livereload');

gulp.task('build:js', function(){
    return gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(concat('bundle.min.js'))
        .pipe(gulp.dest('dist'))
        .pipe(livereload());
});

gulp.task('build:css', function(){
    return gulp.src('src/css/*.css')
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('dist'))
        .pipe(livereload());
});

gulp.task('copy', function() {
    return gulp.src('src/assets/*.png')
        .pipe(gulp.dest('dist/assets'))
});

gulp.task('watch', function() {
    livereload.listen();
        gulp.watch('./src/css/*.css', ['build:css']);
        gulp.watch('./src/js/*.js', ['build:js']);
        gulp.watch('./src/assets/*.png', ['copy']);
});

gulp.task('serve', function() {
    return nodemon({
        script: 'server/index.js',
        env: {
        NODE_ENV: 'development'
        }
    });
});

gulp.task('imagemin', function(){
    gulp.src('src/assets/*.png')
        .pipe(changed('dist/assets'))
        .pipe(imagemin())
        .pipe(gulp.dest('dist/assets'));
});

gulp.task('default', ['build:js', 'build:css', 'imagemin', 'watch', 'serve']);

module.exports = gulp;
