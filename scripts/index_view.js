'use strict';

(function(module) {
  var index_view = {};
  module.index_view = index_view;

  index_view.populateFilters = function() {
    $('article').each(function() {
      if (!$(this).hasClass('template')) {
        var val = $(this).attr('data-project');
        var optionTag = '<option value="' + val.replace(/\W+/g, '') + '">' + val + '</option>';
        $('#filter_project').append(optionTag);

        val = $(this).attr('data-category');
        optionTag = '<option value="' + val.replace(/\W+/g, '') + '">' + val + '</option>';
        if ($('#filter_category option[value="' + val.replace(/\W+/g, '') + '"]').length === 0) {
          $('#filter_category').append(optionTag);
        }
      }
    });
  };

  // WORK IN PROGRESS:  FIX FILTERS IN MOBILE VIEW...  migrate to single handler?
  // restructure the way things are populated.

  // index_view.handleFilters = function() {
  //   console.log('handling filters');
  //   $('#filters').one('change', 'select', function() {
  //     console.log('you got filtered son!');
  //     var resource = this.id.replace('filter_', '');
  //     page('/' + resource + '/' + $(this).val().replace(/\W+/g, '')); // Replace any/all whitespace with a +
  //     console.log('filterstep3');
  //   });
  // };

  index_view.handleCategoryFilter = function() {
    $('#filter_category').on('change', function() {
      $('article').hide();
      $('.' + $(this).val().replace(/\W+/g, '')).fadeIn();
      $('#filter_project').val('');
    });
  };

  index_view.handleProjectFilter = function() {
    $('#filter_project').on('change', function() {
      $('article').hide();
      $('#' + $(this).val().replace(/\W+/g, '')).fadeIn();
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
    // index_view.handleFilters();  // this filter method is broken... On the bright side we're temporarily saving users from pretending like mobile isn't an absolutely terrible way to view any website ever made in the history of man, because screen made for ants...,  so that's a bonus
    index_view.handleProjectFilter();
    index_view.handleCategoryFilter();
    $('.projects').hide();
    $('.contact').hide();
  };
})(window);
