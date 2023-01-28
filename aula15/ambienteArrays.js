let num = [5, 4, 9, 7,6]



/* for(let cont = 0; cont < num.length; cont++){
    console.log(`A posição ${cont} tem o valor ${num[cont]}`)
} */

for(let cont in num){
    console.log(`A posição ${cont} tem o valor ${num[cont]}`)
}

console.log(num.indexOf(10))