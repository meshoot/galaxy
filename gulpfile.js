var gulp            = require('gulp'),
    browserSync     = require('browser-sync'),
    autoprefixer    = require('gulp-autoprefixer'),
    svgmin          = require('gulp-svgmin'),
    imagemin        = require('gulp-imagemin'),
    sass            = require('gulp-sass'),
    watch           = require('gulp-watch'),
    sourcemaps      = require('gulp-sourcemaps'),
    reload          = browserSync.reload,
    rimraf          = require('rimraf'),
    pngquant        = require('imagemin-pngquant'),
    pug             = require('gulp-pug');

var path = {
    build: { //Тут мы укажем куда складывать готовые после сборки файлы
        html:   'build/',
        js:     'build/js/',
        css:    'build/css/',
        img:    'build/img/',
        fonts:  'build/fonts/'
    },
    src: { //Пути откуда брать исходники
        pug: 'src/**/*.pug', 
        js: 'src/js/**/app.js',//В стилях и скриптах нам понадобятся только main файлы
        sass: 'src/scss/**/style.scss',
        allsass: 'src/scss/**/*.scss',
        img: 'src/img/**/*.*', //Синтаксис img/**/*.* означает - взять все файлы всех расширений из папки и из вложенных каталогов
        fonts: 'src/fonts/**/*.*'
    },
    watch: { //Тут мы укажем, за изменением каких файлов мы хотим наблюдать
        pug: 'src/**/*.pug',
        js: 'src/js/**/*.js',
        sass: 'src/scss/**/*.scss',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    clean: './build'
};

// Pug build
gulp.task('pug', function() {
    return gulp.src(path.src.pug)
        .pipe(pug())
        .pipe(gulp.dest(path.build.html))
        .pipe(reload({stream: true}))
});

// JS_BUILD
gulp.task('js:build', function () {
    gulp.src(path.src.js) //Найдем наш main файл
        .pipe(sourcemaps.init()) //Инициализируем sourcemap
        .pipe(sourcemaps.write()) //Пропишем карты
        .pipe(gulp.dest(path.build.js)) //Выплюнем готовый файл в build
        .pipe(reload({stream: true})); //И перезагрузим сервер
});

// SASS-BUILD
gulp.task('sass:build', function() {
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
    gulp.src(path.src.sass)
        .pipe(sourcemaps.init()) //Инициализируем sourcemap
        .pipe(sass().on('error', sass.logError)) // Using gulp-sass
        .pipe(autoprefixer({
            browsers: supportedBrowsers,
            cascade: false
        })) //Добавим вендорные префиксы
        .pipe(sourcemaps.write()) //Пропишем карты
        .pipe(gulp.dest(path.build.css)) //И в build
        .pipe(reload({stream: true}));
});

// IMAGE-BUILD
gulp.task('images:build', function () {
    gulp.src(path.src.img) //Выберем наши картинки
        .pipe(imagemin({ //Сожмем их
            progressive: true,
            pngquant: true,
            svgoPlugins: [{removeViewBox: false}],
            use:[pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest(path.build.img)) //И бросим в build
        .pipe(reload({stream: true}));
});

// FONTS-BUILD
gulp.task('fonts:build', function() {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
});

// GLUE ALL BUILDS
gulp.task('build', [
    'pug',
    'js:build',
    'sass:build',
    'fonts:build',
    'images:build'
]);

// WATCH-TASK Отслеживаем изменения
gulp.task('watch', function(){
    watch([path.watch.pug], function(event, cb) {
        gulp.start('pug');
    });
    watch([path.watch.sass], {readDelay: 100}, function(event, cb) {
        gulp.start('sass:build');
    });
    watch([path.watch.js], function(event, cb) {
        gulp.start('js:build');
    });
    watch([path.watch.img], function(event, cb) {
        gulp.start('images:build');
    });
    watch([path.watch.fonts], function(event, cb) {
        gulp.start('fonts:build');
    });
});

gulp.task('serve', function() {
    browserSync.init({
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
    rimraf(path.clean, cb);
});

gulp.task('default', ['build', 'serve', 'watch']);
