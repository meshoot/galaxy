const gulp = require('gulp');
const browserSync = require('browser-sync');
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const sass = require('gulp-sass');
const watch = require('gulp-watch');
const sourcemaps = require('gulp-sourcemaps');
const reload = browserSync.reload;
const rimraf = require('rimraf');
const pngquant = require('imagemin-pngquant');
const pug = require('gulp-pug');
const plumber = require('gulp-plumber');
const concat = require('gulp-concat');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const browserify = require('browserify');
const babelify = require('babelify');
const runSequence = require('run-sequence'); 

var path = {
    build: { // Пути готовой сборки
        html: 'build/',
        js: 'build/js/',
        css: 'build/styles/',
        img: 'build/img/',
        fonts: 'build/fonts/'
    },
    src: { // Пути исходников
        pug: 'src/views/index.pug',
        js: 'src/js/app.js',
        sass: 'src/scss/**/style.scss',
        allsass: 'src/scss/**/*.scss',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    watch: { //Тут мы укажем, за изменением каких файлов мы хотим наблюдать
        pug: 'src/**/*.pug',
        js: 'src/js/**/*.js',
        sass: 'src/styles/**/*.scss',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    clean: './build'
};

// Pug build
gulp.task('pug', function () {
    return gulp.src(path.src.pug)
            .pipe(plumber())
            .pipe(pug({
                pretty: true,
            }))
            .pipe(gulp.dest(path.build.html))
            .pipe(reload({ stream: true }));
});

// JS_BUILD
gulp.task('js', function () {
    let b = browserify({
        entries: [path.src.js],
        debug: true
    })
        .transform(babelify, { presets: ['@babel/preset-env'] })
        

    return b.bundle()
            .pipe(plumber())
            .pipe(source('app.js'))
            .pipe(buffer())
            .pipe(sourcemaps.write('/'))
            .pipe(gulp.dest(path.build.js))
            .pipe(reload({ stream: true }));
});

// SASS-BUILD
gulp.task('sass', function () {
    var supportedBrowsers = [
        '> 0.5%',
        'last 2 versions',
        'ie >= 10',
        'ie_mob >= 10',
        'ff >= 30',
        'chrome >= 34',
        'safari >= 7',
        'opera >= 23',
        'ios >= 7',
        'android >= 4.1',
        'bb >= 10'
    ];
    return gulp.src(path.src.sass)
            .pipe(plumber())
            .pipe(sourcemaps.init()) //Инициализируем sourcemap
            .pipe(sass().on('error', sass.logError)) // Using gulp-sass
            .pipe(autoprefixer({
                browsers: supportedBrowsers,
                cascade: false
            })) //Добавим вендорные префиксы
            .pipe(sourcemaps.write()) //Пропишем карты
            .pipe(gulp.dest(path.build.css)) //И в build
            .pipe(reload({ stream: true }));
});

// IMAGE-BUILD
gulp.task('images', function () {
    return gulp.src(path.src.img) //Выберем наши картинки
            .pipe(plumber())
            .pipe(imagemin({ //Сожмем их
                progressive: true,
                pngquant: true,
                svgoPlugins: [{ removeViewBox: false }],
                use: [pngquant()],
                interlaced: true
            }))
            .pipe(gulp.dest(path.build.img)) //И бросим в build
            .pipe(reload({ stream: true }));
});

// FONTS-BUILD
gulp.task('fonts', function () {
    return gulp.src(path.src.fonts)
            .pipe(plumber())
            .pipe(gulp.dest(path.build.fonts))
});

// GLUE ALL BUILDS
gulp.task('build', function(callback) {
    runSequence('clean', ['pug', 'js', 'sass', 'fonts', 'images'], callback)
});

// WATCH-TASK Отслеживаем изменения
gulp.task('watch', function () {
    watch([path.watch.pug], function (event, cb) {
        gulp.start('pug');
    });
    watch([path.watch.sass], { readDelay: 100 }, function (event, cb) {
        gulp.start('sass');
    });
    watch([path.watch.js], function (event, cb) {
        gulp.start('js');
    });
    watch([path.watch.img], function (event, cb) {
        gulp.start('images');
    });
    watch([path.watch.fonts], function (event, cb) {
        gulp.start('fonts');
    });
});

gulp.task('server', function () {
    return browserSync.init({
            server: {
                baseDir: "./build"
            },
            tunnel: true,
            host: 'localhost',
            port: 9000,
            logPrefix: "FRONTEND SLAVE"
        });
});

gulp.task('clean', function (cb) {
    return rimraf(path.clean, cb);
});

gulp.task('default', function(callback) {
    runSequence('build', ['server', 'watch'], callback);
});
