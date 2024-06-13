const { src, dest, series } = import('gulp');
const include = require('gulp-file-include');
const htmlMin = require('gulp-htmlmin');
const csso = require('gulp-csso');
const concat = require('gulp-concat');
const del = require('del');

function clear() {
  return del('dist');
}

function html() {
  return src('./**.html').pipe(htmlMin({ collapseWhitespace: true })).pipe(dest('dist'));
}

function css() {
  return src('./styles/**.css').pipe(csso()).pipe(concat('index.css')).pipe(dest('dist'));
}

exports.build = series(clear, html, css);