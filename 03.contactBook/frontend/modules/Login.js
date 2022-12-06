export default class Login {
    constructor(formClass) {
        this.form = document.querySelector('formClass')

    }
    init() {
        this.events()
    }

    events() {
       if (!this.form) return //If form do not exist, not to do!
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            alert('Form not sended.')
            //this.validate(e)
      
        })

    }
    validate(e){
        const el = e.target
        const emailInput = el.querySelector('input[name="email"]')
        const passwordlInput = el.querySelector('input[name="password"]')
        console.log(emailInput.value, passwordlInput.value)
    }
}




