// import functions and grab DOM elements
import { getCandy, getDress, getSong, getMovie } from './fetch-utils.js';
import { renderCandyCard, renderDressList, renderSongList, renderMovieList } from './render-utils.js';
// let state
const candyMenuContainer = document.getElementById('candy-menu-container');
const gownListContainer = document.getElementById('gown-list-container');
const songListContainer = document.getElementById('song-list-container');
const movieListContainer = document.getElementById('movie-list-container');

window.addEventListener('load', async() => {
    const candies = await getCandy();

    for (let candy of candies) {
    

        const candyEl = renderCandyCard(candy);
        candyMenuContainer.append(candyEl);
    }
});

window.addEventListener('load', async() => {
    const dresses = await getDress();

    for (let dress of dresses) {
        const dressEl = renderDressList(dress);
        gownListContainer.append(dressEl);
    }
});

window.addEventListener('load', async() => {
    const songs = await getSong();

    for (let song of songs) {
        const songEl = renderSongList(song);
        songListContainer.append(songEl);
    }
}); 

window.addEventListener('load', async() => {
    const movies = await getMovie();
    for (let movie of movies) {
        const movieEl = renderMovieList(movie);
        movieListContainer.append(movieEl);
        
    }
});