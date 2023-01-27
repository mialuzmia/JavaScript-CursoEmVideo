
function tabuada(){

    let num = document.query
    for (let cont = 1; cont <= 10; cont++){
        let result = cont * num

        console.log(`${num} X ${cont} = ${result}`)
    }
}
tabuada(9)