var indexView = {};

indexView.handleMainNav = function(event) {
  $('.nav_main').on('click', '.tab', function() {
    $('.mini_page').hide();
    $('#' + $(this).data('content')).show();  // show only sections with an ID matching the tab 'content'
  });

  $('.main-nav .tab:first').click(); // Let's now trigger a click on the first .tab element, to set up the page.
};

$(document).ready(function() {
  indexView.handleMainNav();
  $('#projects').hide();
  $('#about').hide();
});
