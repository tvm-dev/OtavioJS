class validateForm {
    constructor() {
        this.form = document.querySelector('.form')
        this.events()
    }
    events() {
        this.form.addEventListener('submit', e => {
            this.handleSubmit(e)
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        const validsFields = this.fieldsAreValids();
        const validsPass = this.passAreValids();
        //console.log('Form not submit.');
        
        if(validsFields && validsPass){
            alert('Form sended.')
            this.form.submit();
        }
        //Sending form if fields and passwords get pass on validations:
    }

    //Creating one method to check if passwords are equals:
    passAreValids() {
        let valid = true

        const pass = this.form.querySelector('.pass')
        const reTypePass = this.form.querySelector('.retype_pass')

        if (pass.value !== reTypePass.value) {
            this.createErroField(pass, 'Your passwords need to be equals.')
            this.createErroField(reTypePass, 'Your passwords need to be equals.')
            valid = false
        }
        if (pass.value.length < 6 || pass.value.length > 12) {
            this.createErroField(pass, 'Your password need be between 6 and 12 characteres.')
            
        }
        //valid = false
        return valid
    }


    fieldsAreValids() {
        let valid = true

        //removing class error-text after second submit:
        for (let errorText of this.form.querySelectorAll('.error-text')) {
            errorText.remove();
            console.log(errorText)
        }

        //check if all fields are not empty, using for looping:
        for (let field of this.form.querySelectorAll('.validation')) {
            //console.log(field)
            const label = field.previousElementSibling.innerText;

            if (!field.value) {
                this.createErroField(field, `This field ${label} can not be empty`)
                valid = false
            }

            //Validating CPF
            if (field.classList.contains('cpf')) {
                if (!this.validaCPF(field))
                    valid = false
            }
            //Validating user
            if (field.classList.contains('user')) {
                if (!this.validateUser(field))
                    valid = false
            }
        }
        return valid
    }

    validateUser(field) {
        const user = field.value
        let valid = true

        //Checking numbers of characters
        if (user.length < 3 || user.length > 12) {
            this.createErroField(field, 'User must be between 3 and 12 characters')
            valid = false
        }
        //Checking letters and numbers from user:
        if (!user.match(/^[a-zA-Z0-9]+$/g)) {
            this.createErroField(field, 'User must contain only letters and/or numbers')
            valid = false
        }
        return valid
    }



    validaCPF(field) {
        const cpf = new ValidaCPF(field.value)

        if (!cpf.valida()) {
            this.createErroField(field, 'CPF is not Valid')
            return false
        }
        return true

    }

    createErroField(field, msg) {
        const div = document.createElement('div')
        div.innerHTML = msg
        div.classList.add('error-text')
        field.insertAdjacentElement('afterend', div)
    }
}

const validate = new validateForm()