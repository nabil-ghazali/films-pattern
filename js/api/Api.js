class Api {
    /**
     * 
     * @param {string} url 
     */
    // Constructeur qui initialise l'URL de base pour les requêtes
    constructor(url) {
        this._url = url
    }

    // Méthode asynchrone pour effectuer une requête GET
    async get() {
        return fetch(this._url)
            .then(res => res.json())
            .then(res => res.data)
            .catch(err => console.log('an error occurs', err))
    }
}


// Classe spécifique pour l'API des films
class MovieApi extends Api {
    /**
     * 
     * @param {string} url 
     */

    // Constructeur hérité qui utilise le constructeur parent avec l'URL spécifique pour les films
    constructor(url) {
        super(url)
    }

    // Méthode asynchrone pour récupérer les données des films
    async getMovies() {
        return await this.get()
    }
}
