class WishListCounter {
    /**
     * Constructeur pour initialiser les propriétés du compteur de liste de souhaits.
     */
    constructor() {
        // Initialise la variable de compteur à 0
        this._count = 0
        // Sélectionne l'élément HTML qui affichera le compte
        this._$wishCount = document.querySelector('.wish-count')
    }

    /**
     * Méthode pour mettre à jour le compteur en fonction de l'action effectuée.
     * @param {string} action - L'action à effectuer ('INC' ou 'DEC').
     */
    update(action) {
        if (action === 'INC') {
            // Incrémente le compteur de 1
            this._count += 1
        } else if (action === 'DEC') {
            // Décrémente le compteur de 1
            this._count -= 1
        } else { 
            // Lance une erreur si l'action n'est pas reconnue
            throw "Action inconnue"
        }
        
        // Met à jour le contenu HTML du compte avec la nouvelle valeur
        this._$wishCount.innerHTML = this._count
    }
}
