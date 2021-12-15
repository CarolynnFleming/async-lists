export function renderCandyCard(candy){
    const div = document.createElement('div');
    const p = document.createElement('p');
    const flavorEl = document.createElement('p');

    div.classList.add('candy-card');
    p.textContent = candy.type;

    flavorEl.classList.add('flavor');
    flavorEl.textContent = candy.flavor;

    div.append(p, flavorEl);

    return div;
} 

export function renderDressList(dress){
    const div = document.createElement('div');
    const p = document.createElement('p');
    const typeEl = document.createElement('p');

    div.classList.add('dress-list');
    p.textContent = dress.name;
    
    typeEl.classList.add('type');
    p.textContent = dress.type;

    div.append(p, typeEl);

    return div;
}

export function renderSongList(song){
    const div = document.createElement('div');
    const p = document.createElement('p');
    const artistEl = document.createElement('p');

    div.classList.add('song-list');
    p.textContent = song.name;

    artistEl.classList.add('artist');
    artistEl.textContent = song.artist;

    div.append(p, artistEl);
    
    return div;
}

export function renderMovieList(movie){
    const div = document.createElement('div');
    const p = document.createElement('p');
    const genreEl = document.createElement('p');

    div.classList.add('movie-list');
    p.textContent = movie.name;

    genreEl.classList.add('genre');
    genreEl.textContent = movie.genre;

    div.append(p, genreEl);

    return div;
}