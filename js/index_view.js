'use strict';

(function(module) {
  var index_view = {};
  module.index_view = index_view;

  index_view.handleMainNav = function(event) {
    $('.nav_main').on('click', '.tab', function() {
      $('.mini_page').hide();
      $('.' + $(this).data('content')).show();  // show only sections with a class matching the tab 'content'
    });

    $('.main-nav .tab:first').click(); // Let's now trigger a click on the first .tab element, to set up the page.
  };

  index_view.initIndexPage = function() {
    Project.all.forEach(function(a){
      $('#project_content_area').prepend(a.toHtml());
    });

    Courses.all.forEach(function(b) {
      $('#project_list').append(b.toHtml());
    });

    index_view.handleMainNav();
    $('.projects').hide();
    $('.about').hide();
  };
})(window);
