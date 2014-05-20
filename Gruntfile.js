"use strict";
module.exports = function( grunt ) {

  grunt.initConfig({
    // configuracoes das tarefas
  });

  // carregando plugins
  grunt.loadNpmTasks( 'plugin-name' );

  // registrando tarefas
  grunt.registerTask( 'default', [ 'watch' ] );

};
