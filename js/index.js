'use strict';

(function(module) {
  var indexView = {};
  module.indexView = indexView;

  indexView.handleMainNav = function(event) {
    $('.nav_main').on('click', '.tab', function() {
      $('.mini_page').hide();
      $('.' + $(this).data('content')).show();  // show only sections with a class matching the tab 'content'
    });

    $('.main-nav .tab:first').click(); // Let's now trigger a click on the first .tab element, to set up the page.
  };

  indexView.initIndexPage = function() {
    Project.all.forEach(function(a){
      $('#project_content_area').prepend(a.toHtml());
    });

    indexView.handleMainNav();
    $('.projects').hide();
    $('.about').hide();
  };
})(window);
