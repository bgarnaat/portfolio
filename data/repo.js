(function(module) {
  var repos = {};
  repos.all = [];

  repos.getRepos = function(callback) {
    $.ajax({
      url: 'https://api.github.com/users/bgarnaat/repos' +
           '?sort=updated',
      type: 'GET',
      headers: {'Authorization': 'token ' + github_token},
      success: function(data, message, xhr) {
        console.log(data);
        repos.all = data;
      }
    }).done(callback);
  };

  repos.select = function(attr) {
    return repos.all.filter(function(repo) {
      return repo[attr];
    });
  };

  module.repos = repos;
})(window);
