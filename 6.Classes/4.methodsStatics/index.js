class remoteControl {
    constructor(tv){
        this.tv = tv
        this.vol = 0
    }
    upVol(){
        this.vol += 2 // or => vol = vol + 2
    }
    downVol(){
        this.vol -= 2
    }

    //Creating one *** static method*** => he do not need use the instance created.
    static turnOnTV(){
        console.log('TV is ON')
    }
}

const rc1 = new remoteControl('LG')
const rc2 = new remoteControl('Samsung G674')

//rc1.upVol()
console.log(rc1)
//rc1.turnOnTV()// impossible because the method is static! 
//how use access static method:
remoteControl.turnOnTV()
