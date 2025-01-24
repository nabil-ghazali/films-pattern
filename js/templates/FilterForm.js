// Déclaration de la classe FilterForm
class FilterForm {
    // Constructeur de la classe
    constructor(Movies) {
        // Stocke les films fournis au constructeur
        this.Movies = Movies

        // Création d'un élément div pour servir de wrapper
        this.$wrapper = document.createElement('div')
        
        // Sélection du conteneur pour le formulaire de filtre
        this.$filterFormWrapper = document.querySelector('.filter-form-wrapper')
        
        // Sélection du conteneur pour afficher les films
        this.$moviesWrapper = document.querySelector('.movies-wrapper')
    }

    // Méthode asynchrone pour filtrer les films
    async filterMovies(actor) {
        // Vide le conteneur des films avant de filtrer
        this.clearMoviesWrapper()

        /* Vous pouvez par la suite supprimer ces lignes */
        // const FilterLib = new FilterV1(this.Movies, actor)
        // const FilteredMovies = await FilterLib.filterByActor()

        // Utilisation d'une adaptation personnalisée pour filtrer les films
        const AdaptedFilterLib = new FilterMoviesAdapter(this.Movies, actor)
        const FilteredMovies = await AdaptedFilterLib.filterByActor()

        // Affiche chaque film filtré dans le conteneur approprié
        FilteredMovies.forEach(Movie => {
            const Template = new MovieCard(Movie)
            this.$moviesWrapper.appendChild(Template.createMovieCard())
        })
    }

    // Méthode qui ajoute un écouteur d'événements sur le formulaire de filtre
    onChangeFilter() {
        // Ajout d'un écouteur d'événements sur le formulaire pour détecter les changements
        this.$wrapper
            .querySelector('form')
            .addEventListener('change', e => {
                const actor = e.target.value
                this.filterMovies(actor)
            })
    }

    // Méthode pour vider le conteneur des films
    clearMoviesWrapper() {
        // Vide le conteneur des films
        this.$moviesWrapper.innerHTML = ""
    }

    // Méthode pour rendre le formulaire de filtre
    render() {
        // Création du formulaire de filtre HTML
        const filterForm = `
            <form class="filter-form" action="#" method="POST">
                <label for="filter-select">Choississez votre acteur préféré : </label>
                <select name="filter-select" id="filter-select">
                    <option value="">Aucun filtre</option>
                    <option value="arnold">Arnold Schwarzenegger</option>
                    <option value="sylvester">Sylvester Stallone</option>
                </select>
            </form>
        `

        // Insère le formulaire dans le wrapper
        this.$wrapper.innerHTML = filterForm
        
        // Ajoute un écouteur d'événements pour filtrer les films lorsqu'on change l'acteur
        this.onChangeFilter()

        // Insère le wrapper avec le formulaire dans le conteneur de filtres
        this.$filterFormWrapper.appendChild(this.$wrapper)
    }
}