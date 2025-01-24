class FilterV2 {
    /**
     * Méthode statique pour filtrer les films par acteur.
     * 
     * @param {string} actor Le nom de l'acteur à rechercher.
     * @param {array} Movies L'ensemble des films à filtrer.
     * @returns {array} Les films filtrés selon l'acteur spécifié.
     */
    static async filterByActor(actor, Movies) {
        // Attendre pendant 200ms avant de continuer (simuler un délai de traitement)
        await new Promise(resolve => setTimeout(resolve, 200))

        // Si aucun acteur n'est spécifié, retourner tous les films
        if (!actor) {
            return Movies
        }

        // Retourner les films dont l'acteur correspond au nom spécifié
        return Movies.filter(Movie => Movie.actor === actor)
    }
}