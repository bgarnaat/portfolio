(function(module) {
  var controller_home = {};

  controller_home.index = function() {
    $('section').hide();
    $('.home').show();
  };

  module.controller_home = controller_home;
})(window);
