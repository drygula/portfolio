const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');
const fileinclude = require('gulp-file-include');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
const cleancss = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');

// Styles Task
async function styles() {
    return gulp
        .src('scss/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
        .pipe(
            autoprefixer({
                grid: true,
                overrideBrowserslist: ['last 10 versions'],
            })
        )
        .pipe(gulp.dest('css'))
        .pipe(cleancss({ level: { 1: { specialComments: 0 } } }))
        .pipe(sourcemaps.write())
        .pipe(rename('main.min.css'))
        .pipe(gulp.dest('css'))
        .pipe(browserSync.stream());
}

// HTML Task
async function html() {
    return gulp
        .src('html-dev/*.html')
        .pipe(
            fileinclude({
                prefix: '@@',
                basepath: '@file',
            })
        )
        .pipe(gulp.dest('../'))
        .pipe(browserSync.reload({ stream: true }));
}

// Scripts Task
async function scripts() {
    return gulp.src('js/**/*.js')
        .pipe(browserSync.reload({ stream: true }));
}

// BrowserSync Task
function serve(done) {
    browserSync.init({
        server: { baseDir: '../' },
        notify: false,
    });
    done();
}

// Watch Task
function watchFiles() {
    gulp.watch('scss/**/*.scss', styles);
    gulp.watch('js/**/*.js', scripts);
    gulp.watch('html-dev/**/*.html', html);
}

// Complex Tasks
const build = gulp.parallel(styles, html, scripts);
const watch = gulp.series(build, gulp.parallel(serve, watchFiles));

// Export Tasks
exports.styles = styles;
exports.html = html;
exports.scripts = scripts;
exports.build = build;
exports.default = watch;
