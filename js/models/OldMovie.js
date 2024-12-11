class OldMovie {

    constructor(data){
        this._title = data.title
        this._synopsis = data.synopsis
        this._picture = data.picture
        this._duration = data.duration
        this._released_in = data.released_in
    }

    get title() {
        return this._title
    }

    get duration() {
        return this._duration
    }
    
    get synopsis() {
        return this._synopsis
    }

    get picture() {
        return `/assets/${this._picture}`
    }

    get thumbnails() {
        return `/assets/thumbnails/${this._picture}`
    }

    get released_in() {
        return this._released_in
    }


}