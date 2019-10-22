const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');
const rename = require('gulp-rename');
const csso = require('gulp-csso');
const autoprefixer = require('gulp-autoprefixer');
const sourcemap = require('gulp-sourcemaps');

gulp.task('watch', () => {
    gulp.watch('__assets/scss/**/*.scss', (done) => {
        gulp.series(['clean', 'styles'])(done);
    });
});

gulp.task('styles', () => {
    return gulp.src('__assets/scss/**/*.scss')
        // Initialize Sourcemap
        .pipe(sourcemap.init())
        // Compile SASS files
        .pipe(sass().on('error', sass.logError))
        // Autoprefix CSS styles for cross browser compatibility
        .pipe(autoprefixer())
        // Minify CSS
        .pipe(csso())
        // Rename output file
        .pipe(rename('styles.min.css'))
        // Write Sourcemap
        .pipe(sourcemap.write('.'))
        // Destination folder
        .pipe(gulp.dest('__assets/css'));
});

gulp.task('clean', () => {
    return del([
        '__assets/css/main.css',
    ]);
});

gulp.task('default', gulp.series(['clean', 'styles']));