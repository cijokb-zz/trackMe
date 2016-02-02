var gulp=require('gulp'),
    open=require('gulp-open'),
    browserify=require('gulp-browserify'),
    connect=require('gulp-connect'),
    concat=require('gulp-concat'),
    del=require('del');
    port=process.env.port||3031;


gulp.task('clean', function(cb) {
    del(['output'], cb);
});

//browserify
gulp.task('browserify',['clean'],function(){
	gulp.src('./app/src/js/App.js').pipe(browserify({transform:'reactify'})).pipe(gulp.dest('./app/dist/js'));
});

//launch browser in port
gulp.task('open',['clean'],function(){
	var options={url:'http://localhost:'+port};
	gulp.src('./app/index.html').pipe(open('',options));
});

//live reload server
gulp.task('connect',['clean'],function(){
	connect.server({
		root:'app',
		port:port,
		livereload:true
	})
});

//live reload js
gulp.task('js',['clean'],function(){
	gulp.src('./app/dist/**/*.js').pipe(connect.reload());
});

//live reload html
gulp.task('html',['clean'],function(){
	gulp.src('./app/*.html').pipe(connect.reload());
});

//watch file for live reload
gulp.task('watch',['clean'],function(){
	gulp.watch('app/dist/js/*.js',['js']);
	gulp.watch('app/index.html',['html']);
	gulp.watch('app/src/js/**/*.js',['browserify']);
});

gulp.task('default',['browserify']);

gulp.task('serve',['browserify','connect','open','watch']);