const nome = "João";
const sexo = "M";
const idade = 60;
const contribuicao = 35;

// var somaContribuicao = idade + contribuicao;
// console.log(somaContribuicao);

if (sexo === "M" && contribuicao >= 35){
    if(somaContribuicao >= 95){
        console.log(`${nome}, você pode se aposentar!`)
    } else{
        console.log(`${nome}, você ainda não pode se aposentar!`)
    }
} else if(sexo === "F" && contribuicao >= 30){
    if(somaContribuicao >= 85){
        console.log(`${nome}, você pode se aposentar!`);
    } else {
        console.log(`${nome}, você ainda não pode se aposentar!`);
    }
} else {
    console.log(`${nome}, você ainda não pode se aposentar!`)
}