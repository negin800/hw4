$(function() {
    updateWidget_articles()
});

let updateWidget_articles = function() {
  var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
  url += '?' + $.param({
    'api-key': "175006ab3b794c31ae2bd73b039d9f01",
    'q': "chicago"
  });
  $.ajax({
    url: url,
    method: 'GET',


  }).done(function(results) {
    console.log("these are the results of articles", results)

    $("#col_3_to_be_replaced").html("")
    let html = '<img class="card-img-top bg-primary img-fluid" src="http://gdpulse.com/wp-content/uploads/2016/04/news-2.jpg">'
    html = html + '<br> <p> Let\'s not fotget about the news! Here are some of the NewYork Times articles about Chicago! Click to know why our city is in the news!</p>'
    html= html + '<a href ='+ results.response.docs[0].web_url+'> <br><p class="card-text">' + results.response.docs[0].headline.main + '</p></a>'
    html= html + '<a href ='+ results.response.docs[1].web_url+'> <br><p class="card-text">' + results.response.docs[1].headline.main + '</p></a>'
    html= html + '<a href ='+ results.response.docs[2].web_url+'> <br><p class="card-text">' + results.response.docs[2].headline.main + '</p></a>'
    html= html + '<a href ='+ results.response.docs[3].web_url+'> <br><p class="card-text">' + results.response.docs[3].headline.main + '</p></a>'
    html= html + '<a href ='+ results.response.docs[4].web_url+'> <br><p class="card-text">' + results.response.docs[4].headline.main + '</p></a>'
    html= html + '<a href ='+ results.response.docs[5].web_url+'> <br><p class="card-text">' + results.response.docs[5].headline.main + '</p><br></a>'

    $("#col_3_to_be_replaced").append(html)


  }).fail(function(err) {
    throw err;
  });

  };
