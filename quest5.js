var vetor=[];
for(i = 0; i<10; i++){
    vetor[i]= Number(prompt(`Digite o ${i+1} numero `));
}
document.write(`vetor=[${vetor}]<br>`);
for  ( let i = 0; j = vetor.length-1; i < (vetor.length/2), j++, j--) {
    let aux= vetor[i];
    vetor[j]= vetor[i];
    vetor[i]=aux;
}
document.write(`vetor=[${vetor}]`);