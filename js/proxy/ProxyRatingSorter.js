class ProxyRatingSorter {

    /**
     * Constructeur de la classe ProxyRatingSorter
     */
    constructor() {
        // Initialise un tableau vide pour stocker les résultats du cache
        this.cache = []

        // Crée une nouvelle instance de RatingSorterApi
        this.RatingSorterApi = new RatingSorterApi()
    }

    /**
     * Méthode asynchrone pour trier les films
     * @param {Array} movies - Tableau contenant les informations sur les films
     * @param {String} orderBy - Clé pour trier les films (par exemple, "date", "rating", etc.)
     * @returns {Promise} Une promesse contenant les données triées
     */
    async sorter(movies,orderBy) {
        
        // Cherche dans le cache s'il y a déjà un résultat pour cette requête
        const cachedResult = this.cache.find(elt =>elt.key === orderBy)
         // Si un résultat est trouvé dans le cache, on l'utilise directement
         if(cachedResult) {
            console.log('get from cache')
            return cachedResult
        }

        // Si pas de résultat dans le cache, on doit faire la requête API
        const data = await RatingSorterApi.sorter(movies, orderBy)

        // On ajoute les nouvelles données triées au cache
        this.cache.push(data)

        // On renvoie les données triées
        return data
    }
}