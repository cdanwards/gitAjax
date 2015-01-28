(function (){
  'use strict';

  var baseUrl = "https://api.github.com/users/cdanwards/";


  $(document).ready(function(){
    var repoTemplate = _.template($('[data-template-name=repo]').text())
    var $repositoriesUl = $('.repositories');

    $.ajax(baseUrl + "repos").done(function(repos) {
      _.each(repos, function(repo){
      $repositoriesUl.append(repoTemplate(repo));
      });
    });
  });
})();
