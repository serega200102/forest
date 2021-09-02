const rename = require("gulp-rename");

const gulp = require("gulp"),
minifyCSS=require("gulp-clean-css"),
renamee=require("gulp-rename"),
sass=require('gulp-sass')(require('sass')),
minifyJS=require("gulp-minify"),
browserSync= require("browser-sync").create();//подключаем gulp и другие библиотеки

gulp.task("mincss", async function () {//переименование+ копирование+
   gulp.src('app/css/*.scss')
   .pipe(sass())
   .pipe(minifyCSS())
   .pipe(renamee({
      suffix:".min"
   }))
   .pipe(gulp.dest('public/css'))
   .pipe(browserSync.stream());
});

gulp.task("minjs", async function () {//переименование+ копирование+
   gulp.src('app/js/*.js')
   .pipe(minifyJS())

   .pipe(gulp.dest('public/js'))
   .pipe(browserSync.stream());
});

gulp.task("watchAll",function(){
   gulp.watch("app/css/*.scss",gulp.series("mincss"));
   gulp.watch("app/js/*.js",gulp.series("minjs"));
});
gulp.task("browserSync",function(){
   browserSync.init({
      server:{
         baseDir:'./public/'
      }
   });
   gulp.watch("public/*.html").on('change',browserSync.reload);
});
gulp.task('default',gulp.parallel("browserSync","watchAll"))