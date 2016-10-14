var Lookup = require('./../js/lookup.js').lookupModule;

var displayRepos = function(repoInfo) {
  $('#showRepoInfo').text(JSON.stringify(repoInfo));
};

$(document).ready(function() {
  var usernameRepo = new Lookup();
  $('#listRepoInfo').click(function() {
    var username = $('#username').val();
    usernameRepo.getRepos(username, displayRepos);
  });
});
