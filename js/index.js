var indexView = {};

indexView.handleMainNav = function(event) {
  $('.nav_main').on('click', 'li', function() {
    var $main_section = $('main > section');
    var $nav_click = $(this).data('content');
    $main_section.hide();
    $main_section.each(function() {
      if($(this).attr('id') === $nav_click) {
        $(this).show();
      }
    });
  });

  $('.main-nav .tab:first').click(); // Let's now trigger a click on the first .tab element, to set up the page.
};

$(document).ready(function() {
  indexView.handleMainNav();
  $('#projects').hide();
  $('#about').hide();
});
