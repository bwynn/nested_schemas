// packages
var gulp = require('gulp');
var sass = require('gulp-sass');

var input = './public/css/*.scss';
var output = './public/css';

var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

gulp.task('sass', function() {
  return gulp
  // find all '.scss' files from the ./public/css folder
  .src(input)
  // run sass on those files
  .pipe(sass())
  // write the resulting css in the output folder
  .pipe(gulp.dest(output));
});

// to run this, simply type 'gulp sass' in the command line, verified and works as expected!
