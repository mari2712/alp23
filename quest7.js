var n=[];
for(i = 0; i<10; i++) {
    n[i] = Number(prompt(`Digite o ${i+1} numero `));
}
document.write(`n=[${n}]<br>`);
let posiçao_menor=0;

for(i=0;i<10;i++){
    if(n[i]< n[posiçao_menor]){
        posiçao_menor=i;
    }

}
document.write(`O menor elemento de N é ${n[posiçao_menor]} e sua posiçao é ${[posiçao_menor]}`);
