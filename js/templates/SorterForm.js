class SorterForm {
      /**
     * Constructeur de la classe SorterForm
     * @param {Array} Movies - Tableau contenant les informations sur les films
     */

    constructor(Movies) {
        // Initialisation des propriétés
        this.Movies = Movies

        // Création d'un élément div pour le wrapper
        this.$wrapper = document.createElement('div')

        // Sélection du wrapper pour le formulaire de tri
        this.$sorterFormWrapper = document.querySelector('.sorter-form-wrapper')

        // Sélection du wrapper où seront affichées les films
        this.$moviesWrapper = document.querySelector('.movies-wrapper')

        // Création d'une nouvelle instance de ProxyRatingSorter
        this.ProxyRatingSorter = new ProxyRatingSorter()
    }



    /**
     * Méthode asynchrone pour trier les films
     * @param {String} sorter - Valeur pour le tri (ASC ou DESC)
     */
    async sorterMovies(sorter) {
        // Vide le wrapper des films
        this.clearMoviesWrapper()

        if (!!sorter) {
            // Ligne commentée car on ne veut plus utilisé l'API (RatingSorterApi) mais le proxy
            // const sortedData = await RatingSorterApi.sorter(this.Movies, sorter)

            // Utilisation du ProxyRatingSorter pour trier les films
            const sortedData = await this.ProxyRatingSorter.sorter(this.Movies, sorter)

            const SortedMovies = sortedData.data 

            // Affiche chaque film trié dans le DOM
            SortedMovies.forEach(Movie => {
                const Template = new MovieCard(Movie)
                this.$moviesWrapper.appendChild(Template.createMovieCard())
            })
        } else {
            // Affiche tous les films sans tri
            this.Movies.forEach(Movie => {
                const Template = new MovieCard(Movie)
                this.$moviesWrapper.appendChild(Template.createMovieCard())
            })
        }
    }

    /**
     * Ajoute un écouteur d'événements pour changer le tri
     */
    onChangeSorter() {
        this.$wrapper
            .querySelector('form')
            .addEventListener('change', e => {
                const sorter = e.target.value
                this.sorterMovies(sorter)
            })
    }


    /**
     * Vide le wrapper des films
     */
    clearMoviesWrapper() {
        this.$moviesWrapper.innerHTML = ""
    }


    /**
     * Rendu du formulaire de tri
     */
        render() {
        const sorterForm = `
            <form action="#" method="POST" class="sorter-form">
                <label for="sorter-select">Triez par date de sortie : </label>
                <select name="sorter-select" id="sorter-select">
                    <option value="">Aucun tri</option>
                    <option value="ASC">Croissante</option>
                    <option value="DESC">Décroissante</option>
                </select>
            </form>
        `

        // Insère le formulaire dans le DOM
        this.$wrapper.innerHTML = sorterForm

        // Ajoute un écouteur d'événements pour changer le tri
        this.onChangeSorter()

        // Insère le wrapper contenant le formulaire dans l'élément avec la classe .sorter-form-wrapper
        this.$sorterFormWrapper.appendChild(this.$wrapper)
    }
}