class FilterV1 {
    /**
     * Constructeur pour initialiser les propriétés du filtre.
     * 
     * @param {array} Movies L'ensemble des films à filtrer.
     * @param {string} actor Le nom de l'acteur pour lequel filtrer.
     */
    constructor(Movies, actor) {
        this._Movies = Movies // Stocke l'ensemble des films
        this._actor = actor // Stocke le nom de l'acteur pour lequel filtrer
    }

    /**
     * Méthode asynchrone pour filtrer les films par acteur.
     * Cette méthode attend 1 seconde avant de commencer le filtrage et retourne tous les films si aucun acteur n'est spécifié.
     * 
     * @returns {array} Les films filtrés selon l'acteur spécifié.
     */
    async filterByActor() {
        // Attendre pendant 1 seconde avant de continuer (simuler un délai de traitement)
        await new Promise(resolve => setTimeout(resolve, 1000))

        // Si aucun acteur n'est spécifié, retourner tous les films
        if (!this._actor) {
            return this._Movies
        }

        // Créer un tableau vide pour stocker les films filtrés
        const FilteredMovies = []

        // Parcourir chaque film dans l'ensemble des films
        for (let i = 0; i < this._Movies.length; i++) {
            // Si le nom de l'acteur du film correspond à celui pour lequel filtrer, ajouter le film au tableau filtré
            if (this._Movies[i].actor === this._actor) {
                FilteredMovies.push(this._Movies[i])
            }
        }

        // Retourner le tableau des films filtrés
        return FilteredMovies
    }
}