function Calc(){
    this.display = document.querySelector('.display')

    this.start = () => {
         this.getClicks()
         this.getEnter()
    };

    this.getEnter = () => {
        document.addEventListener('keyup', e => {
            if (e.keyCode !== 13) return;
            this.executeAccount()
        });
        };
    


this.getClicks = () => {
    document.addEventListener('click', event => {
        const el = event.target;
        if (el.classList.contains('btn-num')) this.addNUmberDisplay(el);
        if (el.classList.contains('btn-clear')) this.clear(el);
        if (el.classList.contains('btn-del')) this.del();
        if (el.classList.contains('btn-eq')) this.executeAccount(el);
    });
};

this.executeAccount = () => {
    try {
        const account = eval(this.display.value)
        if (!account) {
        alert('Invalid Account') 
        return
    }
    this.display.value = account;
        
    } catch (error) {
        alert('Invalid Account') 
        return
    }
}

this.addNUmberDisplay = el => {
this.display.value += el.innerText;
this.display.focus()
}
this.clear = () => this.display.value = ''
this.del = () => this.display.value = this.display.value.slice(0, -1)
};


const calc = new Calc();
calc.start();