(function(module) {
  var repo_view = {};

  function render(repo) {
    var template = Handlebars.compile($('#template_github').text());

    Handlebars.registerHelper('prettifyDate', function(timestamp) {
      return new Date(timestamp).toString('yyyy-mm-dd');
    });
    return template(repo);
  };

  repo_view.initProjectPage = function() {
    $('project_content_area').append(repos.all.map(render));
  };

  module.repo_view = repo_view;
})(window);
