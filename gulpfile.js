  let gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync');
	//uglify = require('gulp-uglify'),
	//concat = require('gulp-concat');	


gulp.task('scss', function() {
//функция .task() конвертирует scss в css
	return gulp.src('app/scss/**/*.scss')
//путь к файлу, который найдет все файлы, которые имею расширение scss
	.pipe(sass({outputStyle: 'expanded'}))
	.pipe(gulp.dest('app/css'))
//место куда скомпилируются новые файлы css
	.pipe(browserSync.reload({stream: true}))
});

gulp.task('html', function() {
	return gulp.src('app/*.html')
	.pipe(browserSync.reload({stream: true}))
});

gulp.task('script', function() {
	return gulp.src('app/js/*.js')
	.pipe(browserSync.reload({stream: true}))
});

gulp.task('js', function() {
	return gulp.src([
		'node_modules/slick-carousel/slick/slick.js',
		'node_modules/magnific-popup/dist/jquery.magnific-popup.js'
	])
	.pipe(concat('libs.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('app/js'))
	.pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    });
}); 

gulp.task('watch', function() {
	gulp.watch('app/scss/**/*.scss', gulp.parallel('scss'))
//команда которая будет следить за изменениями в scss файлах и автоматом их компелировать в css 	
//для работы кода надо в консоли ее запустить введя команду gulp watch
	gulp.watch('app/*.html', gulp.parallel('html'))
	gulp.watch('app/js/*.js', gulp.parallel('script'))
});

gulp.task('default', gulp.parallel('browser-sync', 'watch'))