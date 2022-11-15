//Creating a Calc using Factory Function:
function createCalc() {
    return {

        display: document.querySelector('.display'),

        startCalc() {
            this.clickButtonsOnCalc();
            this.pressEnter()
        },
        pressEnter(){
            this.display.addEventListener('keypress', e => {
            if (e.keyCode === 13){
                this.executeAccount()
                
            }
            })
        },

        clearDisplay() {
            this.display.value = ''

        },

        deleteOneCharacterToLeft() {
            this.display.value = this.display.value.slice(0, -1)
        },
        executeAccount() {
            let account = this.display.value

            try {
                account = eval(account)
               
                if (!account) {
                    alert('Invalid Account')
                    return;
                }

                this.display.value = String(account)
                this.display.focus()
                
            } catch (e) {
                alert('Invalid Account')
                return;

            }

        },

        //All attributes/variables are above:
        //All methods be low:
        //new method:
        clickButtonsOnCalc() {
            //Here, the 'this' is a calc!
            document.addEventListener('click', event => {
                const elementClicked = event.target;

                if (elementClicked.classList.contains('btn-num')) {
                    this.btnToDisplay(elementClicked.innerText);
                    this.display.focus()
                }
                if (elementClicked.classList.contains('btn-clear')) {
                    this.clearDisplay()
                }

                if (elementClicked.classList.contains('btn-del')) {
                    this.deleteOneCharacterToLeft()
                }
                if (elementClicked.classList.contains('btn-eq')) {
                    this.executeAccount()
                }
            });
        },
        btnToDisplay(valueDisplay) {
            this.display.value += valueDisplay
        }

    };
}

const calc = createCalc();
calc.startCalc();