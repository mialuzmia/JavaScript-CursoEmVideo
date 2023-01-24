let idade = 5

console.log(`Você tem ${idade} anos. `)
if(idade >= 18){
    console.log('Voto obrigatório')
}
else if(idade < 16){
    console.log('Não vota')
}
else if(idade >= 16 || idade > 65){
    console.log("Voto opcional")
}