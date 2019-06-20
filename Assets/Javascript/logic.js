
var topics = ["animals", "sports", "food"];

function displayGifs () { 

    var gifTopic = $(this).attr("data-topic"); 

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifTopic + "&api_key=2CvFpdItpqZcWorfO1phM1SeNygFzMZI&limit=7";
    
    $.ajax({ 
        url: queryURL, 
        method: "GET"
    }).then(function(response) { 

        console.log(response); 

        var results = response.data;

        for (var i =0; i < results.length; i++) {
      
            if (results[i].rating !== "pg-13" || results[i].rating !== "pg" || results[i].rating !== "g") {
               
                var gifDiv = $("<div>");
      
                gifDiv.addClass("gifs");
      
                var rating = results[i].rating;
      
                var p = $("<p>").text("Rating: " + rating);
                p.addClass("rate");
      
                var topicImage = $("<img>");
      
                topicImage.attr("src", results[i].images.fixed_height_still.url);
                topicImage.attr("data-still", results[i].images.fixed_height_still.url);
                topicImage.attr("data-animate", results[i].images.fixed_height.url);
                topicImage.attr("data-state", "still");
                topicImage.addClass('topicImage');
      
                gifDiv.append(p);
                gifDiv.append(topicImage);
      
                $("#gifs-appear-here").prepend(gifDiv);
          
            }
        }
    });
}