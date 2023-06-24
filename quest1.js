let vetor = [];
for ( let i=0; i<10; i++) {
    let n = Number(prompt( `Digite o ${i+1} numero`))
    vetor [i] = n * n;
}
document.write(`vetor =[${vetor}]<br>`)
for  ( let i = 0; i< vetor.length; i++){
    document.write(`vetor[${i}] = [${vetor[i]}]<br>`);
}