class FormModal {
//Cette classe Form gère la création et le rendu d'un formulaire modal pour l'enregistrement de l'utilisateur. Elle vérifie si l'utilisateur existe déjà avant d'afficher le formulaire, et cache le formulaire une fois l'utilisateur enregistré.

    constructor() {
        // Création d'un élément div pour envelopper le formulaire
        this.$wrapper = document.createElement('div')

        // Recherche de l'élément DOM avec la classe 'modal'
        this.$modalWrapper = document.querySelector('.modal')
    }

    // Méthode pour gérer la soumission du formulaire
    onSubmitForm() {
        // Sélection de l'élément form dans le wrapper
        this.$wrapper
            .querySelector('form')

            // Ajout d'un écouteur d'événement sur la soumission du formulaire
            .addEventListener('submit', e => {
                e.preventDefault()

                // Récupération de la valeur du champ firstname
                const firstNameInputValue = this
                    .$wrapper
                    .querySelector('#firstname')
                    .value
                
                // Récupération de la valeur du champ lastname
                const lastNameInputValue = this
                    .$wrapper
                    .querySelector('#lastname')
                    .value
                
                // Création d'un nouvel objet User avec les valeurs saisies
                const user = new User({
                    firstName: firstNameInputValue,
                    lastName: lastNameInputValue
                })

                // Vérification si l'utilisateur existe déjà
                if (user.user) {
                    // Suppression de la classe 'modal-on' pour cacher le modal
                    this.$modalWrapper.classList.remove('modal-on')
                    
                    // Vidage du contenu du modal
                    this.$modalWrapper.innerHTML = "" }
            })
    }

    // Méthode pour déterminer si le formulaire doit être affiché
    shouldDisplayForm() {
        // Création d'un nouvel objet User
        const user = new User()
        
        // Affichage de l'utilisateur dans la console (pour débogage)
        console.log(user)
        
        // Retourne vrai si l'utilisateur n'existe pas
        return !user.user
    }

    // Méthode pour créer le contenu HTML du formulaire
    createForm() {
        // Définition du HTML du formulaire en tant que chaîne de caractères
        const form = `
            <form action="#" method="POST">
                <div class="form-group">
                    <label class="form-label" for="firstname">Votre prénom : </label>
                    <input id="firstname" name="firstname" type="text">
                </div>
                <div class="form-group">
                    <label class="form-label" for="lastname">Votre nom : </label>
                    <input id="lastname" name="lastname" type="text">
                </div>
                <button class="submit-btn" type="submit">Valider</button>
            </form>
        `
        // Remplissage du wrapper avec le HTML du formulaire
        this.$wrapper.innerHTML = form

        // Ajout de la classe 'modal-on' à l'élément modal
        this.$modalWrapper.classList.add('modal-on')
        
        // Insertion du wrapper dans l'élément modal
        this.$modalWrapper.appendChild(this.$wrapper)    
        }

    // Méthode pour afficher et rendre le formulaire
    render() {
        // Vérification si le formulaire doit être affiché
        if (this.shouldDisplayForm()) {
        // Création du formulaire si nécessaire
        this.createForm()
        
        // Ajout de l'écouteur d'événement pour la soumission
        this.onSubmitForm()
        }
    }
}