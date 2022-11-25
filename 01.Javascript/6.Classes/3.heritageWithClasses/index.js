class Device {
    constructor(namee) {
        this.namee = namee
        this.on = false
    }
    turnOn() {
        if (this.on) {
            console.log(this.namee + ' already is ON')
            return
        }
        this.on = true
    }
    off() {
        if (!this.on) {
            console.log(this.namee + ' already is OFF')
            return
        }
        this.on = false;
    }
}
// const device1 = new Device('Smartphone');
// device1.turnOn()
// console.log(device1);

//new Class with heritages:
class Smartphone extends Device{

        constructor(namee, color, model){
            super(namee) //super() => call all declarations from father class, here
            this.color
            this.model = model
        }
}
const s1 = new Smartphone('Iphone', 'Black', 'v14 ProMax')
console.log(s1)










