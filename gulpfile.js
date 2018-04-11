var gulp = require('gulp');
var simple = require('./gulpPlugin');

gulp.task('simple',function(){
	gulp.src(['aa.txt'])
		.pipe(simple())
		.pipe(gulp.dest('./aa-simple.txt'))
});