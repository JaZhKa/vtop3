import { src, dest, series } from 'gulp';
import include from 'gulp-file-include';
import htmlMin from 'gulp-htmlmin';
import csso from 'gulp-csso';
import concat from 'gulp-concat';
import autoprefixer from 'gulp-autoprefixer';


function html() {
  return src('./**.html')
    .pipe(htmlMin({ collapseWhitespace: true }))
    .pipe(dest('dist'));
}

function css() {
  return src('./styles/*.css')
    .pipe(csso())
    .pipe(concat('index.css'))
    .pipe(autoprefixer())
    .pipe(dest('dist'));
}


function JS() {
  return src('./js/index.js')
    .pipe(dest('dist'));
}

export default series(html, css, JS);