var apiKey = "?api_key=6ahnRsSlhvpPlehhB0fMzpoCmPoENxdPYX8NLcze";
var apod = moment().subtract(1, 'days').format('YYYY-MM-DD');
var apodURL = 'https://api.nasa.gov/planetary/apod' + apiKey + '&date=' + apod;



$.ajax({
    url: apodURL,
    method: "GET"
}).then(function (response) {
    var apodImg= response.url;
   
    var apodExp = response.explanation;
   
    $("#intro").css('background', 'url(' + apodImg + ')no-repeat center center fixed');
    $("#apodExp").text(apodExp);
   
});
