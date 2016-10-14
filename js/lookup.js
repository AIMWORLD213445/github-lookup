var apiKey = require('./../.env').apiKey;

function Lookup() {
}

Lookup.prototype.getRepos = function(userName, displayFunction){
  $.get('https://api.github.com/users/' + userName + '/repos?access_token=' + apiKey).then(function(response){
    displayFunction(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.lookupModule = Lookup;
