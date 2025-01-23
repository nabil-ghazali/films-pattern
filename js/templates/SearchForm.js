class SearchForm {
    constructor(Movies) {
        this.Movies = Movies // Stocke l'ensemble des films
        this.isSearchingByActor = false // Indicateur pour savoir si la recherche se fait par acteur

        // Instances des classes de recherche par nom de film et par nom d'acteur
        this.MovieNameSearch = new MovieNameSearch(Movies)
        this.ActorNameSearch = new ActorNameSearch(Movies)

        // Création d'un élément div pour encapsuler le formulaire de recherche
        this.$wrapper = document.createElement('div')
        // Sélection des éléments du DOM pour le formulaire de recherche et l'affichage des films
        this.$searchFormWrapper = document.querySelector('.search-form-wrapper')
        this.$moviesWrapper = document.querySelector('.movies-wrapper')
    }

    // Méthode pour effectuer une recherche
    search(query) {
        let SearchedMovies = null // Variable pour stocker les films recherchés
        
        // Vérifie si la recherche se fait par acteur ou par nom de film
        if (this.isSearchingByActor) {
            // Recherche par nom d'acteur
            SearchedMovies = this.ActorNameSearch.search(query)
        } else {
            // Recherche par nom de film
            SearchedMovies = this.MovieNameSearch.search(query)
        }

        // Affiche les films recherchés
        this.displayMovies(SearchedMovies)
    }

    // Méthode pour vider le conteneur des films affichés
    clearMoviesWrapper() {
        this.$moviesWrapper.innerHTML = "" // Efface le contenu HTML du conteneur des films
    }

    // Méthode pour afficher les films recherchés
    displayMovies(Movies) {
        this.clearMoviesWrapper()

        Movies.forEach(Movie => {
            const Template = new MovieCard(Movie)
            this.$moviesWrapper.appendChild(Template.createMovieCard())
        })
    }

    // Méthode pour gérer les événements de recherche
    onSearch() {
        // Ajoute un écouteur d'événement 'keyup' au formulaire de recherche
        this.$wrapper
            .querySelector('form')
            .addEventListener('keyup', e => {
                const query = e.target.value // Récupère la valeur de l'input de recherche

                // Si la requête contient au moins 3 caractères, effectue la recherche
                if (query.length >= 3) {
                    this.search(query)
                } else if (query.length === 0) {
                    // Si l'input est vide, affiche tous les films
                    this.displayMovies(this.Movies)
                }
            })
    }

    // Méthode pour gérer le changement de type de recherche (par acteur ou par nom de film)
    onChangeSearch() {
        // Ajoute un écouteur d'événement 'change' à la case à cocher
        this.$wrapper
            .querySelector('.search-checkbox')
            .addEventListener('change', e => {
                // Met à jour l'indicateur de recherche par acteur en fonction de l'état de la case à cocher
                this.isSearchingByActor = e.target.checked
            })
    }

    // Méthode pour rendre le formulaire de recherche dans le DOM
    render() {
        // Template HTML du formulaire de recherche
        const searchForm = `
            <form action="#" method="POST">
                <div class="search-input">
                    <label for="search">Rechercher : </label> 
                    <input id="search" type="text">
                </div>
                <div class="search-checkbox">
                    <label for="actor">Rechercher par acteur</label>
                    <input id="actor" type="checkbox" />
                </div>
            </form>
        `

        // Insère le formulaire de recherche dans le wrapper
        this.$wrapper.innerHTML = searchForm

        // Initialise les écouteurs d'événements pour la recherche et le changement de type de recherche
        this.onSearch()
        this.onChangeSearch()

        // Ajoute le wrapper contenant le formulaire de recherche au conteneur du formulaire de recherche dans le DOM
        this.$searchFormWrapper.appendChild(this.$wrapper)
    }
}