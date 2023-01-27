

function contar(){
    let txtinicio = document.getElementById('boxstart')
    let txtfim = document.getElementById('boxend')
    let txtpulo = document.querySelector('input#boxjump')

    let res  = document.getElementById('res')

    if(txtinicio.value.length == 0 || txtfim.value.length == 0 || txtpulo.value.length == 0){ 
        alert('[ERRO] FALTAM DADOS!') 
    }   
        else{
            res.innerHTML = 'Contando: '

            let inicio = Number(txtinicio.value)
            let fim = Number(txtfim.value)
            let pulo = Number(txtpulo.value)

            for(let cont = inicio; cont <= fim; cont = cont + pulo){
                res.innerHTML += `${cont} \u{1F449} `
            }
            res.innerHTML += `\u{1F3F4} `
        }

  
  
}
