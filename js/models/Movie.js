class Movie {
    // Constructeur qui initialise les propriétés du film
    constructor(data) {
        this._title = data.title
        this._synopsis = data.synopsis
        this._picture = data.picture
        this._duration = data.duration
        this._released_in = data.released_in
    }

    // Accesseur pour obtenir le titre du film (utilise la langue française si disponible sinon l'anglais)
    get title() {
        return this._title.hasOwnProperty('fr') ? this._title['fr'] : this._title['en']
    }

    // Accesseur pour obtenir la durée du film sous forme de chaîne
    get duration() {
        const hours = Math.floor(this._duration / 60)
        const minutes = this._duration % 60
        return `${hours}h${minutes}`
    }
    
    // Accesseur pour obtenir le résumé du film
    get synopsis() {
        return this._synopsis
    }

    // Accesseur pour obtenir l'URL de l'image du film
    get picture() {
        return `/assets/${this._picture}`
    }

    // Accesseur pour obtenir l'URL des miniatures du film
    get thumbnails() {
        return `/assets/thumbnails/${this._picture}`
    }

    // Accesseur pour obtenir la date de sortie du film
    get released_in() {
        return this._released_in
    }


}