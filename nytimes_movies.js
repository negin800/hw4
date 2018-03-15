$(function() {
    updateWidget_movies()
});

let updateWidget_movies = function() {
  var url = "https://api.nytimes.com/svc/movies/v2/reviews/search.json";
  url += '?' + $.param({
    'api-key': "175006ab3b794c31ae2bd73b039d9f01"
  });
  $.ajax({
    url: url,
    method: 'GET',


  }).done(function(resultssss) {
    console.log("these are the resultsssss", resultssss)



    $("#col_1_to_be_replaced").html("")
    let html = '<img class="card-img-top img-fluid" src="https://www.fluentin3months.com/wp-content/uploads/2015/08/movies.jpg" >'
    html = html + '<br> <p> If you are deciding on which movies to watch this weekend, we are here to help you by providing the summaries of movies! Check if you like them!</p>'
    html = html + '<br><h4 class="card-title">' + resultssss.results[0].display_title + '</h4>'
    html = html + '<a href ='+ resultssss.results[0].link.url+'> <p class="card-text">' + "Short summary: " + resultssss.results[0].summary_short + '</p></a>'

    html = html + '<br><h4 class="card-title">' + resultssss.results[1].display_title + '</h4>'
    html = html + '<a href ='+ resultssss.results[1].link.url+'> <p class="card-text">' + "Short summary: " + resultssss.results[1].summary_short + '</p></a>'

    html = html + '<br><h4 class="card-title">' + resultssss.results[2].display_title + '</h4>'
    html = html + '<a href ='+ resultssss.results[2].link.url+'> <p class="card-text">' + "Short summary: " + resultssss.results[2].summary_short + '</p></a>'

    html = html + '<br><a href="http://www.amctheatres.com/"> <img class="card-img-top bg-primary img-fluid" src= "http://www.gossipextra.com/wp-content/uploads/2015/10/AMC-popcorn-soda-2.jpg"> </a>'

    $("#col_1_to_be_replaced").append(html)



  }).fail(function(err) {
    throw err;
  });

  };
