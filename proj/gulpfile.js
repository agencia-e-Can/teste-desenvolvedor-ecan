const gulp = require('gulp');
const sass = require('gulp-sass');

//Compile Sass
sass.compiler = require('node-sass');

gulp.task('sass', () =>{
    return gulp.src('src/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css/'));
});

gulp.task('watch', () =>{
    gulp.watch('src/sass/*.scss', gulp.series('sass'));
});