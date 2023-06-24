let altura=[];
let soma=0;
let maior=0;
for(i = 0; i<10; i++) {
    altura[i] = Number(prompt(`Digite o ${i+1} numero `));
   soma+=altura[i];
   if(media<altura[maior]) {
    maior=i;
   }
}
document.write(`Altura dos atletas= [${altura}]<br>`);
document.write(`A media das alturas dos atletas é${media}<br>`);
 let media=soma/altura.length;

 for(i=0;i<10;i++){
    if(media<altura[maior]){
        maior=i;
        document.write(`Alturas dos atletas maior do que a media é ${altura[maior]}<br>`);
    }

 }