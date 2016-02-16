(function(module) {
  var controller_home = {};

  controller_home.index = function() {
    $('.mini_page').hide();
    $('.home').show();
  };

  module.controller_home = controller_home;
})(window);
