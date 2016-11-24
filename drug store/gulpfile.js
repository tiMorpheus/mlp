
var gulp = require('gulp');

var browserSync = require('browser-sync').create();



gulp.task('watch',function(){
    gulp.watch('app/css/**/*.css', browserSync.reload);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
});


gulp.task('browserSync', function(){
    browserSync.init({
        server:{
            baseDir: 'app'
        },
    })
});