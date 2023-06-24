let numero=[];
let soma=0;
for (let i = 0; i<10; i++) {
 numero[i] = Number(prompt(`Digite o ${i+1} numero `));
 soma= soma+numero[i];
}
document.write(`numeros= [${numero}]<br>`);
document.write(`A soma dos numeros é ${soma}`);
