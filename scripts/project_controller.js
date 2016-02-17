(function(module) {
  var controller_project = {};

  Project.fetchAll();

  controller_project.index = function() {
    $('section').hide();
    $('.projects').show();
  };

  controller_project.index_course = function(ctx) {
    console.log(ctx.params.category);
    $('article').hide();
    $('.' + ctx.params.category).show();
  };

  controller_project.index_item = function(ctx) {
    console.log(ctx.params.project);
    $('article').hide();
    $('#' + ctx.params.project).show();
  };

  module.controller_project = controller_project;
})(window);
