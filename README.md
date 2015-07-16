# gulp-autoload-tasks
Auto loads tasks for large modular projects, including configuration object and reducing code duplication

## Usage

`gulpfile.js`:
```
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')(gulp);

var config = {
    src: 'src',
    tmp: '.tmp',
    dist: 'dist'
}

require('gulp-autoload-tasks')(gulp, plugins, config);

gulp.task('default', ['copy']);

```

`gulp_tasks/copy.js`:
```
module.exports = function (gulp, plugins, config) {

gulp.task('copy', function () {
    return gulp
      .src( config.src + 'index.html' )
      .pipe( gulp.dest( config.dist ) );
})
```

## Different Directory

`gulpfile.js`:
```
var differentDir = 'gulp-awesome-tasks'; // Default: 'gulp_tasks'

require('gulp-autoload-tasks')(gulp, plugins, config, differentDir);

```