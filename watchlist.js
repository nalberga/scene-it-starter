

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
var results = document.getElementsByClassName("movie-container")[0];

results.innerHTML = renderMovies(JSON.parse(localStorage.getItem("watchlist")));


