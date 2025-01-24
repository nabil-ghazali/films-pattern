class RatingSorterApi {
    /**
     * Méthode statique asynchrone pour trier les données
     * @param {Array} data - Tableau contenant les données à trier
     * @param {String} orderBy - Direction du tri ('ASC' pour croissant ou 'DESC' pour décroissant)
     * @returns {Promise} Une promesse résolue avec l'objet trié
     */
    static async sorter(data, orderBy) {
        // Log pour indiquer que nous allons effectuer un tri
        console.log("Get from compute")

        // Vérification de la direction du tri
        if (orderBy === 'ASC') {
            // Retourne une nouvelle promesse pour simuler une opération asynchrone
            return new Promise((resolve) => {
                // Simule un délai de 1 seconde avant de traiter le tri
                setTimeout(() => {
                    // Crée un objet de résultat
                    const result = {
                        key: orderBy, // Stocke la direction du tri
                        data: Array.from(data).sort((a, b) => a.released_in - b.released_in)
                        // Trie les données par ordre croissant basé sur released_in

                    }

                    // Résout la promesse avec le résultat trié
                    resolve(result) 

                }, 1000) // Délai de 1000 ms (1 seconde)
            })
        } else if (orderBy === 'DESC') {
            // Même logique que pour ASC, mais avec un tri décroissant
            return new Promise((resolve) => {
                setTimeout(() => {
                    const result = {
                        key: orderBy,
                        data: Array.from(data).sort((a, b) => b.released_in - a.released_in)
                        // Trie les données par ordre décroissant basé sur released_in

                    }

                    resolve(result)
                }, 1000)
            })
        } else {
            // Lance une erreur si orderBy n'est ni 'ASC' ni 'DESC'
            throw 'unknow orderBy type'
        }
    }
}