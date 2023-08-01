const jokeButton = document.getElementById("jokeButton");
const jokeText = document.getElementById("jokeText");
const dadJokeButton = document.getElementById("dadJokeButton");
const dadJokeText = document.getElementById("dadJokeText");

jokeButton.addEventListener("click", fetchJoke);
dadJokeButton.addEventListener("click", fetchDadJoke);

function fetchJoke() {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => response.json())
    .then((data) => {
      jokeText.textContent = data.value;        
    })
    .catch((error) => {
      console.log("Error fetching joke:", error);
    });
}

function fetchDadJoke() {
  fetch("https://icanhazdadjoke.com/", {
    headers: {
        Accept: "application/json",
  }})
    .then((response) => response.json())
    .then((data) => {
      dadJokeText.textContent = data.joke;
    })
    .catch((error) => {

    });
}

// Function to rate Chuck Norris joke
function rateJoke(rating) {
    // Get the previous rating from local storage, or initialize to 0 if not found
    let previousRating = parseInt(localStorage.getItem('jokeRating') || '0', 10);
  
    if (rating === 'up') {
      previousRating++;
    } else if (rating === 'down') {
      previousRating--;
    }
  
    // Update the joke rating and store it in local storage
    localStorage.setItem('jokeRating', previousRating.toString());

    // Update the chuck joke score on the DOM
    const jokeScoreElement = document.getElementById('jokeScore');
    jokeScoreElement.textContent = `Score: ${previousRating}`;

  }
  
  // Function to rate dad joke
  function rateDadJoke(rating) {
    // Get the previous rating from local storage, or initialize to 0 if not found
    let previousRating = parseInt(localStorage.getItem('dadJokeRating') || '0', 10);
  
    if (rating === 'up') {
      previousRating++;
    } else if (rating === 'down') {
      previousRating--;
    }
  
    // Update the dad joke rating and store it in local storage
    localStorage.setItem('dadJokeRating', previousRating.toString());

    // Update the dad joke score on the DOM
    const dadJokeScoreElement = document.getElementById('dadJokeScore');
    dadJokeScoreElement.textContent = `Score: ${previousRating}`;

  }

  // Function to reset Chuck Norris joke score
function resetJokeScore() {
    localStorage.removeItem('jokeRating'); // Remove the score from local storage
    const jokeScoreElement = document.getElementById('jokeScore');
    jokeScoreElement.textContent = 'Score: 0'; // Reset the score on the DOM to 0
  }
  
  // Function to reset dad joke score
  function resetDadJokeScore() {
    localStorage.removeItem('dadJokeRating'); // Remove the score from local storage
    const dadJokeScoreElement = document.getElementById('dadJokeScore');
    dadJokeScoreElement.textContent = 'Score: 0'; // Reset the score on the DOM to 0
  }

  // Retrieve and display scores from local storage when the page loads
    window.addEventListener('load', () => {
    const jokeScore = parseInt(localStorage.getItem('jokeRating') || '0', 10);
    const dadJokeScore = parseInt(localStorage.getItem('dadJokeRating') || '0', 10);
  
    const jokeScoreElement = document.getElementById('jokeScore');
    const dadJokeScoreElement = document.getElementById('dadJokeScore');
  
    jokeScoreElement.textContent = `Score: ${jokeScore}`;
    dadJokeScoreElement.textContent = `Score: ${dadJokeScore}`;
  });
