

//adcionar elementos na array
// dizer quantos numeros foram colocados
//dizer o menor e maior numeros
//dizer a soma de todos os valores 
//dizer a media dos valores

var lista = []

function adcionar(){
    let boxnum = document.getElementById('boxnum')
    let num = Number(boxnum.value)
    let caixa = document.getElementById('selnum')
    
    if(num > 100 || lista.includes(num) == true || boxnum.value.length == 0){
        alert('Valor inválido ou já encontrado na lista')
    }
    else{
        let item = document.createElement('option')
        item.text = `Valor ${num} adicionado.`
        caixa.appendChild(item)
        lista.push(num)

    }
    
}

function finalizar(){
    
    let res = document.getElementById('res')
    lista.sort()

    let total = lista.length
    let maior = 0
    let menor = lista[0]
    let soma = 0 
    for(cont=0; cont < lista.length; cont++){
        soma = soma + lista[cont]
        if(lista[cont] > maior){
            maior = lista[cont]
        }
        if(lista[cont] < menor){
            menor = lista[cont]
        }
    }
    let media =  soma / lista.length

    if(lista.length == 0){
        alert('Adicione valores antes de finalizar!')
     
    }
    else{
        res.innerHTML += `Ao todo temos ${total} números cadastrados.<br><br>`
        res.innerHTML += `O maior valor informado foi ${maior}.<br><br>`
        res.innerHTML += `O menor valor informado foi ${menor}<br><br>`
        res.innerHTML += `Somando todos os valores, temos ${soma}<br><br>`
        res.innerHTML +=`A média dos valores digitados é ${media}`
    }

   
}
