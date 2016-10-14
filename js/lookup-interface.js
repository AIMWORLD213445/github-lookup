var Lookup = require('./../js/lookup.js').lookupModule;

var displayRepos = function(repoInfo) {
  $('#showRepoInfo').append('<br>' + repoInfo + '<br>');
};

$(document).ready(function() {
  var usernameRepo = new Lookup();
  $('#listRepoInfo').click(function() {
    var username = $('#username').val();
    usernameRepo.getRepos(username, displayRepos);
  });
});
