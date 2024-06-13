const { src, dest, series } = require('gulp');
const include = require('gulp-file-include');
const htmlMin = require('gulp-htmlmin');
const csso = require('gulp-csso');
const concat = require('gulp-concat');


function html() {
  return src('./**.html').pipe(htmlMin({ collapseWhitespace: true })).pipe(dest('dist'));
}

function css() {
  return src('./styles/**.css').pipe(csso()).pipe(concat('index.css')).pipe(dest('dist'));
}

exports.build = series(html, css);