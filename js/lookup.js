var apiKey = require('./../.env').apiKey;

function Lookup() {
}

Lookup.prototype.getRepos = function(username, displayFunction) {
  $.get('https://api.github.com/users/' + username + '/repos?per_page=100>access_token=' + apiKey).then(function(response){

for (var i = 0; i<response.length; i++) {
    console.log(response[i].name);
    displayFunction(response[i].name);
    displayFunction(response[i].description);
  }
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.lookupModule = Lookup;
