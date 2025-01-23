class Search {
    constructor(Movies) {
        this.Movies = Movies
    }

    search(query) {
        return this.filterMovies(query)
    }
}

// Classe principale pour la recherche de films
class MainSearch extends Search {
    // Constructeur qui initialise la classe avec un ensemble de films
    constructor(Movies) {
        super(Movies) // Appelle le constructeur de la classe parente 'Search'
    }

    // Méthode pour filtrer les films en fonction d'une requête
    filterMovies(query) {
        // Filtre les films dont le titre contient la requête (insensible à la casse)
        return this.Movies.filter(Movie =>
            Movie.title.toLowerCase().includes(query.toLowerCase())
        )
    }
}

class MovieNameSearch extends Search {
    constructor(Movies) {
        super(Movies)
    }

    filterMovies(query) {
        return this.Movies.filter(Movie =>
            Movie.title.toLowerCase().includes(query.toLowerCase())
        )
    }
}

// Classe pour la recherche de films par nom d'acteur
class ActorNameSearch extends Search {
    // Constructeur qui initialise la classe avec un ensemble de films
    constructor(Movies) {
        super(Movies) // Appelle le constructeur de la classe parente 'Search'
    }

    // Méthode pour filtrer les films en fonction d'une requête
    filterMovies(query) {
        // Filtre les films dont le nom de l'acteur contient la requête (insensible à la casse)
        return this.Movies.filter(Movie =>
            Movie.actor.toLowerCase().includes(query.toLowerCase())

            // La méthode includes est utilisée pour vérifier si le titre du film ou le nom de l'acteur contient la chaîne de caractères spécifiée dans la requête de recherche, en ignorant la casse grâce à toLowerCase().
        )
    }
}