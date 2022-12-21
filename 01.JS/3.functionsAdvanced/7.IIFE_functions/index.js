//IIFE => Immediately invoked function expression

(function(age, weight, height){
    const surNamee = 'Viana'
    function createName(namee){
        return namee + ' ' + surNamee
    }

    function speakName(){
        console.log(createName('Thiago'))
    }

    speakName()
    console.log(age, weight, height)
})(38, 90, 1.84)