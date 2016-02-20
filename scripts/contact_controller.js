(function(module) {
  var controller_contact = {};

  controller_contact.index = function() {
    $('section').hide();
    $('.contact').show();
  };

  module.controller_contact = controller_contact;
})(window);
