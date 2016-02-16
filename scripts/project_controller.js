(function(module) {
  var controller_project = {};

  Project.fetchAll();

  controller_project.index = function() {
    $('.mini_page').hide();
    $('.projects').show();
  };

  module.controller_project = controller_project;
})(window);
