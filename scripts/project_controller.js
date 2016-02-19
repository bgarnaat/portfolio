(function(module) {
  var controller_project = {};

  Project.fetchAll();

  controller_project.index = function() {
    $('section').hide();
    $('.projects').show();
  };

  controller_project.index_course = function(ctx, next) {
    console.log(ctx.params.category);
    $('article').hide();
    $('.' + ctx.params.category).show();
    next;
  };

  controller_project.index_item = function(ctx, next) {
    var project_despace = ctx.params.project.replace(/\W+/g, '');
    console.log('project_despace: ' + project_despace);
    $('article').hide();
    $('#' + project_despace).show();
    next;
  };

  module.controller_project = controller_project;
})(window);
