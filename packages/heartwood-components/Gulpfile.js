const fs = require('fs-extra')
const gulp = require('gulp')
const sass = require('gulp-sass')
const rename = require('gulp-rename')
const sassGlob = require('gulp-sass-glob')
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const sourcemaps = require('gulp-sourcemaps')
const through = require('through2')

function styles() {
	return gulp
		.src(['stylesheets/heartwood-components.scss'])
		.pipe(sourcemaps.init())
		.pipe(sassGlob())
		.pipe(sass().on('error', sass.logError))
		.pipe(postcss([autoprefixer]))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('./public/stylesheets'))
}

function stylesMinify() {
	return gulp
		.src(['stylesheets/heartwood-components.scss'])
		.pipe(sassGlob())
		.pipe(sass().on('error', sass.logError))
		.pipe(postcss([autoprefixer, cssnano]))
		.pipe(
			rename({
				suffix: '.min'
			})
		)
		.pipe(gulp.dest('./public/stylesheets'))
}

function js() {
	return gulp
		.src(['components/**/*.js', '!components/**/*.config.js'])
		.pipe(gulp.dest('./public/js'))
}

function svg() {
	const cwd = process.cwd()
	const all = {}

	return gulp
		.src(['public/icons/*.svg'])
		.pipe(
			(function() {
				return through.obj(function(file, enc, cb) {
					const projectPath = file.path.split(cwd)[1]
					const matches = /^\/public\/icons\/(?:ic_fill|ic)_([^\n\r]*)([^\n\r]*).svg$/gi.exec(
						projectPath
					)

					const isFillIcon = projectPath.includes('ic_fill')

					if (matches) {
						all[matches[1]] = {
							path: projectPath,
							isLineIcon: !isFillIcon
						}
					}

					cb()
				})
			})()
		)
		.on('data', data => {
			all.push(data)
		})
		.on('end', () => {
			fs.writeJson('./icons.json', all)
		})
}

// A task to import base variables first, then from within our import file, fetch component styles and add them to a concatenated output file
gulp.task('styles', styles)

gulp.task('styles-minify', stylesMinify)

gulp.task('js', js)

gulp.task('svg', svg)

// Watcher
gulp.task('watch', function() {
	// Don't watch our import file for changes, watch the underlying partials for changes. If changes, run styles task to re-compile
	gulp.watch(
		['stylesheets/**/*.scss', 'components/**/*.scss', 'components/**/*.js'],
		// ['styles', 'styles-minify', 'js']
		gulp.series(styles, stylesMinify, js)
	)
})

// Make sure you run fractal with "fractal start --sync" to use livereload in conjunction with this
