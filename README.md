# gulp-autoload-tasks
Auto loads tasks for large modular projects, including configuration object and reducing code (imports) duplication
Loading code inspired by [generator-gulp-angular](https://github.com/Swiip/generator-gulp-angular) 's `gulpefile.js`

## Installation

```sh
$ npm install --save-dev gulp-autoload-tasks
```

## Usage

`gulpfile.js`:
```javascript
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
```javascript
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
var differentDir = 'gulp_awesome_tasks'; // Default: 'gulp_tasks'

require('gulp-autoload-tasks')(gulp, plugins, config, differentDir);

```


## API

```javascript
var autoLoadTasks = require('gulp-autoload-tasks');
```

### autoLoadTasks(*gulp*, *plugins*, *config*, *gulpTasksDir*)

Loads every file in the gulpTasksDir (`gulp_tasks` by default) with the following params - `gulp`, `plugins`, `config`. So that your module declaration looks like
 
`gulpfile.js`:
```javascript
var autoLoadTasks = require('gulp-autoload-tasks');

autoLoadTasks(gulp, plugins, config, gulpTaskDir);
```

`some_gulp_task.js`:
```javascript
module.exports = function (gulp, plugins, config) {
    /* code goes here */
}
```

#### gulp

Type: `Object`  
The imported gulp module

#### plugins

Type: `Object`  
Usually created by `gulp-load-plugins`

#### config

Type: `Object`  

Configuration object. Can contain folder names and paths, generic error handler and all of the repeating variables you might have in your gulp workflow.

#### gulpTasksDir

Type: `String`  
Default: `gulp_tasks`

The directory containing the gulp task files. Each file has the name of the task it holds - `clean.js`, `build.js`, etc...


## License

Copyright (c) 2015 [Shai Reznik](https://github.com/shairez)

Licensed under [the MIT License](./LICENSE).
