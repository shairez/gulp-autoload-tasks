var wrench = require('wrench');

module.exports = function(gulp, gulpPlugins, config, gulpDir){

  gulpDir = gulpDir || './gulp_tasks';

  wrench.readdirSyncRecursive(gulpDir)
    .filter(function(file){
              return (/\.(js)$/i).test(file);
            })
    .map(function(file){
           require(gulpDir + '/' + file)(gulp, gulpPlugins, config);
         });

}