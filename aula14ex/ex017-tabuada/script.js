
function tabuada(){

    let box = document.querySelector('input#box')
    let tabuada = document.getElementById('tab')
    let num = Number(box.value)
    
    if(box.value.length == 0){
        alert('Digite um número')
    }
    else{
        tabuada.innerHTML = ''
        for (let cont = 1; cont <= 10; cont++){

           let item = document.createElement('option')
           item.text = `${num} X ${cont} = ${num*cont} `
           item.value = `tab${cont} `
           tabuada.appendChild(item)
        }
         
    }
    
}
