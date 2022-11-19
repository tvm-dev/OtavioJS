//superClass

function Account(agency, account, balance){
    this.agency = agency
    this.account = account
    this.balance = balance
}
Account.prototype.withdraw = function(value){
    if(this.balance < value){
        console.log(`Your withdraw is bigger than your balance!`)
        this.seeBalance()
        return
    }
    //if the person have positive balance, follow above
    this.balance -= value
    this.seeBalance()

}
Account.prototype.deposit = function(value){
    console.log(`Your current balance  is: R$ ${this.balance}`)
    console.log(`Your deposit now: R$ ${value}`)
    this.balance += value
    this.seeBalance()
}
Account.prototype.seeBalance = function(){
    console.log(`Agency: ${this.agency} | Account: ${this.account} | Balance R$ ${this.balance.toFixed(2)}`)
}

// const account1 = new Account(6470, 10400, 0)
// //console.log(account1)
// account1.withdraw(2900)

// ===> creating a current account:
function currentAccount(agency, account, balance, limite){
    Account.call(this, agency, account, balance)
    this.limit = this.limit
}

//This line below create the link with the father function Account, to inherit parts of the function father!
currentAccount.prototype = Object.create(Account.prototype)
currentAccount.prototype.constructor = currentAccount

currentAccount.prototype.withdraw = function(value){
    if(value > (this.balance + this.limit)){
        console.log(`Your withdraw is bigger than your balance and your limit.`)
        this.seeBalance()
        return
    }
    //if the person have positive balance, follow above
    this.balance -= value
    this.seeBalance()

}

function savingAccount(agency, account, balance){
    Account.call(this, agency, account, balance)
}
savingAccount.prototype = Object.create(Account.prototype)
savingAccount.prototype.constructor = savingAccount


const cc = new currentAccount(6470, 1000, 0, 100)
cc.deposit(10)
cc.withdraw(110)
cc.withdraw(1)
//cc.seeBalance()

console.log('==========================')
//Creating a saving account:
const sa = new savingAccount(6470, 423, 0)
sa.deposit(10)
sa.withdraw(110)
sa.withdraw(1)
