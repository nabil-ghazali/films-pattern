class App {
    // Constructeur qui initialise les propriétés nécessaires
    constructor() {
        this.$moviesWrapper = document.querySelector('.movies-wrapper') // Sélectionne l'élément DOM conteneur des cartes de films

        this.moviesApi = new MovieApi('/data/new-movie-data.json') // Initialise une instance de MovieApi avec un fichier JSON
        this.externalMoviesApi = new MovieApi('/data/external-movie-data.json') // Initialise une instance de MovieApi avec un fichier JSON

    }

    
    // Méthode asynchrone principale qui récupère et affiche les données des films
    async main() {
        const moviesData = await this.moviesApi.getMovies() // Récupère les données des films
        const externalMoviesData = await this.externalMoviesApi.getMovies() // Récupère les données des films

        //Ici, transforme mon tableau de données en un tableau de classe Movie
        const Movies = moviesData.map(movie => new MoviesFactory(movie, 'newApi'))
        const ExternalMovies = externalMoviesData.map(movie => new MoviesFactory(movie, 'externalApi'))

        console.log(Movies)

        const FullMovies = Movies.concat(ExternalMovies)

        FullMovies
            .forEach(movie => {
                
                console.log("====") // Affiche une séparation visuelle dans la console
                console.log(movie) // Affiche les détails du film dans la console
                console.log("====") // Affiche une autre séparation visuelle
                
                // Crée une nouvelle instance de MovieCard pour chaque film
                const Template = new MovieCard(movie)
                
                // Ajoute la carte de film créée à l'élément DOM conteneur
                this.$moviesWrapper.appendChild(Template.createMovieCard())        

        })    
    }
}

// Crée une nouvelle instance de l'objet App et exécute sa méthode main
const app = new App()
app.main()
