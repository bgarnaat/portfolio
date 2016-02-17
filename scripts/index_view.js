'use strict';

(function(module) {
  var index_view = {};
  module.index_view = index_view;

  index_view.populateFilters = function() {
    $('article').each(function() {
      if (!$(this).hasClass('template')) {
        var val = $(this).attr('data-project');
        var optionTag = '<option value="' + val + '">' + val + '</option>';
        $('#filter_project').append(optionTag);

        val = $(this).attr('data-category');
        optionTag = '<option value="' + val + '">' + val + '</option>';
        if ($('#filter_category option[value="' + val + '"]').length === 0) {
          $('#filter_category').append(optionTag);
        }
      }
    });
  };

  index_view.handleCategoryFilter = function() {
    $('#filter_category').on('change', function() {
      if ($(this).val()) {
        $('article').hide();
        $('article[data-category="' + $(this).val() + '"]').fadeIn();
      } else {
        $('article').fadeIn();
        $('article.template').hide();
      }
      $('#filter_project').val('');
    });
  };

  index_view.handleProjectFilter = function() {
    $('#filter_project').on('change', function() {
      if ($(this).val()) {
        $('article').hide();
        $('article[data-project="' + $(this).val() + '"]').fadeIn();
      } else {
        $('article').fadeIn();
        $('article.template').hide();
      }
      $('#filter_category').val('');
    });
  };

  index_view.initIndexPage = function() {
    Categories.all.forEach(function(b) {
      $('#project_list').append(b.toHtml());
    });

    Project.all.forEach(function(a){
      $('#project_content_area').prepend(a.toHtml('#template_project'));
      $('#project_menu_' + a.category).append(a.toHtml('#template_project_menu_item'));
      console.log('Project.all.a.category: ' + a.category);
    });

    index_view.populateFilters();
    index_view.handleProjectFilter();
    index_view.handleCategoryFilter();
    $('.projects').hide();
    $('.about').hide();
  };
})(window);
