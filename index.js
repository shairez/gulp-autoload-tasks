var wrench = require('wrench');
var path = require('path');

module.exports = function(gulp, gulpPlugins, config, gulpTasksDir){

  gulpTasksDir = gulpTasksDir || 'gulp_tasks';

  if (gulpTasksDir[0] !== path.sep && gulpTasksDir.slice(0, 2) !== '.' + path.sep) {
    gulpTasksDir = path.join(process.cwd(), gulpTasksDir);
  }

  wrench.readdirSyncRecursive(gulpTasksDir)
    .filter(function(file){
              return (/\.(js)$/i).test(file);
            })
    .map(function(file){
           require(gulpTasksDir + '/' + file)(gulp, gulpPlugins, config);
         });

}