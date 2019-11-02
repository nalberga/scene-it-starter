

function renderMovies(movieData) {
 
  var movieHTML = movieData.map(function(movie) {
  
      return `
      <div class="card movie-card" style="width: 18rem;">
          <img class="card-img-top" src="${movie.Poster}" alt="Card image cap">
          <div class="card-body">
              <h5 class="card-title">${movie.Title}</h5>
              <p class="card-text">${movie.Year}</p>
              <button class="btn btn-primary" onClick="saveToWatchlist('${movie.imdbID}')">Save to Watchlist</button>
          </div>
      </div>
      `;
  })


  var finalHTML = movieHTML.join('')

  
  return finalHTML;
}

function saveToWatchlist(imdbID) {
  
  var movie = movieData.find(function(currentMovie) {
     
      return currentMovie.imdbID == imdbID;
  });

 
  var watchlistJSON = localStorage.getItem('watchlist');               

  var watchlist = JSON.parse(watchlistJSON);

  if (watchlist == null) {    
  
      watchlist = [];
  }
  
  watchlist.push(movie);
  
  watchlistJSON = JSON.stringify(watchlist);
  
  localStorage.setItem('watchlist', watchlistJSON);
}


window.addEventListener('DOMContentLoaded', function() {
 
  var searchForm = document.getElementById('search-form');

 
  searchForm.addEventListener('submit', function(event) {
     
      event.preventDefault();
     
      var searchString = document.getElementsByClassName('search-bar')[0].value;

      var urlEncodedSearchString = encodeURIComponent(searchString);

      axios.get('https://www.omdbapi.com/?apikey=3430a78&s='+urlEncodedSearchString)
        .then(function (response) {
         
           movieData = response.data.Search

           var results = document.getElementsByClassName('results')[0];
           var movieHTML = renderMovies(movieData);
          
           results.innerHTML = movieHTML;

      })
  });
});

