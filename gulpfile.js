var gulp = require('gulp');
var html = require('gulp-htmlmin');
var sass = require('gulp-sass');



// minificar SASS:
gulp.task('sass', function() {
	return gulp.src('./src/scss/style.scss')
	   .pipe(sass({outputStyle:"compressed"}))
           .pipe(gulp.dest('./dist/css'));
});



// minificar HTML:
gulp.task('html', function() {
	return gulp.src('./src/index.html')
	   .pipe(html({collapseWhitespace:true}))
           .pipe(gulp.dest('./dist'));
});



// watch INDEX e SCSS:
gulp.task('watch', ['html', 'sass'], function() {
	gulp.watch('./src/index.html', ['html']);
	gulp.watch('./src/scss/style.scss', ['sass']);   
});



// Default
gulp.task('default', ['watch']);