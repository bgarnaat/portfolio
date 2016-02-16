(function(module) {
  var controller_about = {};

  controller_about.index = function() {
    $('.mini_page').hide();
    $('.about').show();
  };

  module.controller_about = controller_about;
})(window);
