$(function() {
    updateWidget_best_sellers()
});

let updateWidget_best_sellers = function() {
  var url = "https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json";
  url += '?' + $.param({
    'api-key': "175006ab3b794c31ae2bd73b039d9f01"
  });
  $.ajax({
    url: url,
    method: 'GET',


  }).done(function(resultssss) {
    console.log("these are the results of best seller books", resultssss)

    $("#col_2_to_be_replaced").html("")
    let html = '<img class="card-img-top bg-primary img-fluid" src="http://www.tellingtales.org/wp-content/uploads/2017/02/hands-hand-book-reading.jpg">'
    html = html + '<br> <p> Here\'s the challenge! Let\'s see if you can finish top 5 NewYourk Times best seller books in the next 3 months! Here is the list of books:</p>'

    html = html + '<p class="card-text">' + "#1: "+ '</p>'
    html = html + '<h4 class="card-title">' + resultssss.results[0].title + '</h4>'
    html = html + '<p class="card-text">' + "Author: " + resultssss.results[0].author + '</p>'

    html = html + '<p class="card-text">' + "#2: "+ '</p>'
    html = html + '<h4 class="card-title">' + resultssss.results[1].title + '</h4>'
    html = html + '<p class="card-text">' + "Author: " + resultssss.results[1].author + '</p>'

    html = html + '<p class="card-text">' + "#3: "+ '</p>'
    html = html + '<h4 class="card-title">' + resultssss.results[2].title + '</h4>'
    html = html + '<p class="card-text">' + "Author: " + resultssss.results[2].author + '</p>'

    html = html + '<p class="card-text">' + "#4: "+ '</p>'
    html = html + '<h4 class="card-title">' + resultssss.results[3].title + '</h4>'
    html = html + '<p class="card-text">' + "Author: " + resultssss.results[3].author + '</p>'

    html = html + '<p class="card-text">' + "#5: "+ '</p>'
    html = html + '<h4 class="card-title">' + resultssss.results[4].title + '</h4>'
    html = html + '<p class="card-text">' + "Author: " + resultssss.results[4].author + '</p>'


    html = html + '<a href="http://www.barnesandnoble.com"> <img class="card-img-top bg-primary img-fluid" src= "https://pmcdeadline2.files.wordpress.com/2011/05/barnes_noble_logo_20110520005245.jpg"> </a>'

    $("#col_2_to_be_replaced").append(html)


  }).fail(function(err) {
    throw err;
  });

  };
