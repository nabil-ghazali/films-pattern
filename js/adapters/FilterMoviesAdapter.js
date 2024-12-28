class FilterMoviesAdapter {
    // COnstructeur de la classe
    constructor(Movies, actor) {
        // Stocke les films fournis au constructeur
        this.Movies = Movies
        // Stocke l'acteur fourni au constructeur
        this.actor = actor
    }

    // Méthode asynchrone pour filtrer les films par acteur
    async filterByActor() {
        // Appelle la méthode filterByActor de FilterV2 avec les films et l'acteur comme arguments
        return await FilterV2.filterByActor(this.actor, this.Movies)
    }
}