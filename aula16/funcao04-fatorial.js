function fatorial(num){
    let fat = 1 

    for(let cont = num; cont > 1; cont--){
        fat = fat * cont
    }
    return fat
}       

console.log(fatorial(5))