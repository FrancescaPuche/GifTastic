
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
               //creating a div for the gif
               var gifDiv = $("<div>");
      
               gifDiv.addClass("gifs");
      
               //Storing the result item's rating
               var rating = results[i].rating;
      
               //creating a paragraph tag with the result item's rating
               var p = $("<p>").text("Rating: " + rating);
               p.addClass("rate");
      
               // Creating an image tag
               var topicImage = $("<img>");
      
               //Giving the image tag an src attribute of a property pulled off the result item
               topicImage.attr("src", results[i].images.fixed_height_still.url);
               topicImage.attr("data-still", results[i].images.fixed_height_still.url);
               topicImage.attr("data-animate", results[i].images.fixed_height.url);
               topicImage.attr("data-state", "still");
               topicImage.addClass('topicImage');
      
               gifDiv.append(p);
               gifDiv.append(topicImage);
      
               //Prepending the gifDiv to the "#gifs-appear-here" in div in the HTML
               $("#gifs-appear-here").prepend(gifDiv);
          
             }
        gifDiv.append(divOne); 

    })
}   