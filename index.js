var wrench = require('wrench');
var path = require('path');

module.exports = function(gulp, gulpPlugins, config, gulpDir){

  gulpDir = gulpDir || 'gulp_tasks';

  if (gulpDir[0] !== path.sep && gulpDir.slice(0, 2) !== '.' + path.sep) {
    gulpDir = path.join(process.cwd(), gulpDir);
  }

  wrench.readdirSyncRecursive(gulpDir)
    .filter(function(file){
              return (/\.(js)$/i).test(file);
            })
    .map(function(file){
           require(gulpDir + '/' + file)(gulp, gulpPlugins, config);
         });

}