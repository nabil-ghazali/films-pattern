class User {
    constructor(data) {
        //Cette condition vérifie si une instance de User existe déjà.
        //Si c'est le cas, elle retourne l'instance existante (User.instance) sans créer de nouvelle instance.
        if (User.exists) {
            return User.instance

        //Cette condition vérifie si les données nécessaires pour créer une nouvelle instance sont présentes.
        } else if (data && data.firstName && data.lastName) {
            // J'initialise les propriétés firstName et lastName
            // Ces lignes initialisent les propriétés privées de l'objet User avec les valeurs fournies dans les données.
            this._firstName = data.firstName
            this._lastName = data.lastName

            // Je les sauvegarde en Local Storage
            this.saveToLocalStorage()

            // Je "lock" l'objet :
            // Cela marque l'objet comme étant la seule instance valide de User.
            //User.instance pointe vers cette instance spécifique.
            User.instance = this

            //User.exists est mis à true pour indiquer qu'une instance existe maintenant.
            User.exists = true

            //Cette ligne retourne l'instance créée, permettant d'utiliser cette instance dans le code qui appelle le constructeur.
            return this

            //Cette approche utilise le pattern Singleton pour garantir qu'il n'y a qu'une seule instance de User au cours de l'exécution du programme. Elle permet également de stocker et récupérer les données utilisateur entre les sessions en utilisant le localStorage.
        }
    }

    get firstName() {
        return this._firstName
    }

    get lastName() {
        return this._lastName
    }

    get user() {
        // Vérifie si firstName et lastName existent soit au sein de la classe, soit en LocalStorage
        const firstName = this._firstName || localStorage.getItem('firstName')
        const lastName = this._lastName || localStorage.getItem('lastName')

        // Si oui, alors je réinstancie : on a besoin de ce bout de code une fois que l'application a été quittée.
        if (firstName && lastName) {
            const user = new User({
                firstName,
                lastName
            })
        }

        // Sinon, ça veut dire que la classe n'a pas été instancié.
        if (!firstName && !lastName) {
            return null
        }

        // Ici, je retourne le user
        return {
            firstName: firstName,
            lastName: lastName,
        }   
    }

    //Cette méthode est appelée pour sauvegarder les données de l'utilisateur dans le localStorage.
    saveToLocalStorage() {
        //localStorage : est une API JavaScript qui permet de stocker des données dans le navigateur de manière persistante.

        //Le premier argument 'firstName' est le nom de la clé sous laquelle les données seront stockées.
        localStorage.setItem('firstName', this._firstName)

        //Le second argument this._firstName est la valeur à stocker. C'est la première lettre de l'utilisateur.
        localStorage.setItem('lastName', this._lastName)
    }
}