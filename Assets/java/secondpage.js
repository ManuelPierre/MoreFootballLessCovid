$(document).ready(function(){

    const url = "https://api.sportsdata.io/v3/nfl/odds/json/AlternateMarketGameOddsByWeek/2020/4?key=f7876577a76b4ae49e69a47f4dcdcdff";
    // betting odds
    $.ajax({
        url: url,
        method: 'GET'
    }).then( function(response) {
        const oddsDiv = document.getElementById('odds');
        for (i=0;i<15;i++) {
            var h2tag = document.createElement('h2');
            var para = document.createElement('p');
            var homePara = document.createElement('p');
            h2tag.append(response[i].AwayTeamName+' vs '+response[i].HomeTeamName);
            para.append(response[i].AwayTeamName+" Money Line = "+ response[i].AlternateMarketPregameOdds[0].AwayMoneyLine);
            homePara.append(response[i].HomeTeamName+" Money Line = "+ response[i].AlternateMarketPregameOdds[0].HomeMoneyLine);
            oddsDiv.append(h2tag);
            oddsDiv.append(para);
            oddsDiv.append(homePara);
            console.log(response);

        }
        
    });
    console.log('hi')

});