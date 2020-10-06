$.ajax({
    url: 'https://api.sportsdata.io/v3/nfl/scores/json/NewsByTeam/sf?key=f7876577a76b4ae49e69a47f4dcdcdff',
    method: 'GET'

}).then(function(response){
    let newsArray = [];
    for (i=0; i<response.length; i++) {
        let title = response[i].Title;
        let content = response[i].Content;

        newsArray.push({title, content});

    }
    console.log(newsArray);
})
