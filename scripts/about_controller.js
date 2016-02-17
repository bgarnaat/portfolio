(function(module) {
  var controller_about = {};

  controller_about.index = function() {
    $('section').hide();
    $('.about').show();
  };

  module.controller_about = controller_about;
})(window);
