'use strict';

(function(module) {
  var index_view = {};
  module.index_view = index_view;

  // TODO:  modify this for use with filters.
  // $(function() {
  //   var template = Handlebars.compile($('#filter-template').text());
  //
  //   var filter_data = {
  //     filters: [
  //       {filter_type: 'author'},
  //       {filter_type: 'category'}
  //     ]
  //   };
  //   $('#filters').append(template(filter_data));
  // });

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
    Project.all.forEach(function(a){
      $('#project_content_area').prepend(a.toHtml());
    });

    Categories.all.forEach(function(b) {
      $('#project_list').append(b.toHtml());
    });

    index_view.populateFilters();
    index_view.handleProjectFilter();
    index_view.handleCategoryFilter();
    $('.projects').hide();
    $('.about').hide();
  };
})(window);
