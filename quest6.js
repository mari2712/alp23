var vetor=[];
let qpar=0;
let qimpar=0;
 
for(i = 0; i<10; i++) {
    vetor[i] = Number(prompt(`Digite o ${i+1} numero `));
    if(vetor [i]%2 == 0){
        qpar++;

    }
    else{
        qimpar++;

    }
}
document.write(`${vetor}<br>`);
document.write(` A quantidade de numero pares é ${qpar}<br>`);
document.write(` A quantidade de numeros impares é ${qimpar}`);