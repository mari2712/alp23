let v=[];
for (let i = 0; i<8; i++){
    v[i]= Number(prompt(`Digite o ${i+1} numero `));

}
let n = Number(prompt(`Digite o numero que deseja marcar`));

let posiçao=-1;
for  (let i = 0; i<v.length; i++){
    if (n==v[i]){
        posiçao=i;
    document.write (`${n} encontrado na posiçao  ${posiçao}<br>`);
    }
    }
    if (posiçao==-1) {
        document.write(`${n} nao encontrado`);
1    }