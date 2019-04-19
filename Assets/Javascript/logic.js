
var topics = ["animals", "sports", "food"];

function displayGifs () { 

    var gifTopic = $(this).attr("data-topic"); 

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifTopic + "&api_key=2CvFpdItpqZcWorfO1phM1SeNygFzMZI&limit=7";
    
    $.ajax({ 
        url: queryURL, 
        method: "GET"
    }).then(function(response) { 

        console.log(response); 

        var gifDiv = $("<div class='gif'>"); 

        var rating = response.rating; 

        var divOne = $("<div>").text("Rating: " + rating); 

        gifDiv.append(divOne); 

    })
}   