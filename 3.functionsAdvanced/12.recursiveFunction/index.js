function recursiveFunction(max){
        console.log(max)
    if (max >= 100 ) return;
    max++
    recursiveFunction(max)
}

recursiveFunction(0)