

function contar(){
    let txtinicio = document.getElementById('boxstart')
    let txtfim = document.getElementById('boxend')
    let txtpulo = document.querySelector('input#boxjump')

    let res  = document.getElementById('res')

    if(txtinicio.value.length == 0 || txtfim.value.length == 0 || txtpulo.value.length == 0){ 
        alert('[ERRO] FALTAM DADOS!') 
        res.innerHTML = "Impossível contar!"
    }   
        else{
            res.innerHTML = 'Contando: <br>'

            let inicio = Number(txtinicio.value)
            let fim = Number(txtfim.value)
            let pulo = Number(txtpulo.value)

            if (pulo <= 0){
                alert('Pulo inválido, considerando pulo 1')
                pulo  = 1
            }
            if(inicio < fim){
                // crescente 
                for(let cont = inicio; cont <= fim; cont = cont + pulo){
                    res.innerHTML += `${cont} \u{1F449} `
                }
                
            }
            else if(inicio > fim){
                //decrescente
                for(let cont = inicio; cont >= fim; cont = cont - pulo){
                    res.innerHTML += `${cont} \u{1F449}`
                }
                
            }
            
            res.innerHTML += `\u{1F3F4} `
            
        }

  
  
}
