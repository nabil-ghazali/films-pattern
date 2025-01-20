class WishListSubject {
    /**
     * Constructeur pour initialiser les propriétés du sujet.
     */
    constructor() {
        this._observers = []
    }

    /**
     * Méthode pour s'abonner à un observateur.
     * @param {object} observer - L'objet observateur à s'abonner.
     */
    subscribe(observer) {
        this._observers.push(observer)
    }

    /**
     * Méthode pour se désabonner d'un observateur.
     * @param {object} observer - L'objet observateur à se désabonner.
     */
    unsubscribe(observer) {
        this._observers = this._observers.filter(obs => obs !== observer)
    }

    /**
     * Méthode pour notifier tous les observateurs lorsqu'un événement se produit.
     * @param {object} action - L'action ou l'événement à noter.
     */
    fire(action) {
        this._observers.forEach(observer => observer.update(action))
    }
}
