const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
  ];


function imprimirEmTela(usuario){
    for(let i = 0; i < usuario.length; i++){
       let tecnologiasDoUsuario = usuario[i].tecnologias.join(', '); //Concatena os valores do array através do delimiter
       console.log(`${usuario[i].nome} trabalha com ${tecnologiasDoUsuario}`);        
    }
}



imprimirEmTela(usuarios);