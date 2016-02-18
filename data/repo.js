(function(module) {
  var repos = {};
  repos.all = [];

  repos.getRepos = function(callback) {
    $.get('/github/users/bgarnaat/repos' +
           '?sort=updated',
      function(data, message, xhr) {
        console.log(xhr);
        console.log(data);
        repos.all = data;
      }).done(callback);
  };

  repos.select = function(attr) {
    return repos.all.filter(function(repo) {
      return repo[attr];
    });
  };

  module.repos = repos;
})(window);
