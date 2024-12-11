class MovieCard {
    // Constructeur qui initialise avec un objet Movie
    constructor(movie) {
        this._movie = movie
    }

    // Méthode qui crée une carte HTML pour le film
    createMovieCard() {
        const $wrapper = document.createElement('div')
        $wrapper.classList.add('movie-card-wrapper')

        const movieCard = `
            <div class="movie-thumbnail center">
                <img
                    alt="${this._movie.title}"
                    src="${this._movie.picture}"
                />
            </div>
            <h3 class="fs-16 center">${this._movie.title}</h3>
            <p class="fs-14 center">
                <span>${this._movie.released_in}</span>
                -
                <span>${this._movie.duration}</span>
            </p>
        `
        
        $wrapper.innerHTML = movieCard
        return $wrapper
    }
}
