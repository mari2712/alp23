let original=[];
let impares=[];
let pares=[];
for(i = 0; i<10; i++) {
    original[i] = Number(prompt(`Digite o ${i+1} numero `));
}
for(i = 0; i<10; i++) {
    if (original[i]%2==0){
        pares.push(original[i]);
            
    }else{
        impares.push(original[i]);
            
    }
}
document.write(` original= [${original}]<br>`);
document.write(` pares= [${pares}]<br>`);
document.write(` impares= [${impares}]<br>`);