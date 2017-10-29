const gulp = require ('gulp');
const autoprefixer = require ('gulp-autoprefixer');
const babel = require ('gulp-babel');
const browserSync = require('browser-sync').create();
const cleanCss = require ('gulp-clean-css');
const concat = require ('gulp-concat');
const imagemin = require ('gulp-imagemin');
const jshint = require ('gulp-jshint');
const minify = require ('gulp-minify');
const plumber = require('gulp-plumber');
const sass = require ('gulp-sass');
const sourcemaps = require ('gulp-sourcemaps');
const uglify = require('gulp-uglify');

const source = {
    sass: './src/**/*.scss',
    js: './src/**/*.js',
    images: './src/img/**/*',
    html: './src/**/*.html'
};
const watch = {
    sass: './src/**/*.scss',
    js: './src/**/*.js',
    images: './src/img/**/*',
    html: './src/**/*.html'
};
const output = {
    sass: './public',
    js: './public',
    images: './public/img',
    html: './public'
};
    
const imageSettings = [
    imagemin.gifsicle({interlaced: true}),
    imagemin.jpegtran({progressive: true}),
    imagemin.optipng({optimizationLevel: 5}),
    imagemin.svgo({
        plugins: [
            {removeViewBox: true},
            {cleanupIDs: false}
        ]
    })
];

gulp.task('sass', () => {
    return gulp.src(source.sass)
        .pipe(plumber())
        //.pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer({ grid: true }))
        .pipe(cleanCss())
        //.pipe(sourcemaps.write())
        .pipe(gulp.dest(output.sass))
        .pipe(browserSync.stream());
});

gulp.task('js', () => {
    return gulp.src(source.js)
        .pipe(plumber())
        //.pipe(sourcemaps.init())
        //.pipe(jshint())
        //.pipe(jshint.reporter('default'))
        .pipe(babel({presets: ['es2015']}))
        .pipe(concat('main.js'))
        .pipe(uglify())
        //.pipe(sourcemaps.write())
        .pipe(gulp.dest(output.js))
});

gulp.task('images', () => {
    return gulp.src(source.images)
        //.pipe(imagemin(imageSettings))
        .pipe(gulp.dest(output.images))
});

gulp.task('html', () => {
    return gulp.src(source.html)
        .pipe(gulp.dest(output.html))
});

gulp.task('serve', ['sass', 'js', 'images', 'html'], () => {

        browserSync.init({
            server: "./public",
        });

        gulp.watch(watch.sass, ['sass']);
        gulp.watch(watch.js, ['js']).on('change', browserSync.reload);
        gulp.watch(watch.images, ['images']).on('change', browserSync.reload);
        gulp.watch(watch.html, ['html']).on('change', browserSync.reload);
    });

gulp.task('default', ['serve']);