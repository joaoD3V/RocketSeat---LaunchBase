const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
  ];

function checaSeUsuarioUsaCSS(usuario){
    const compararCSS = 'css';

    for(let j = 0; j < usuario.tecnologias.length; j++){
        let tecnologia = usuario.tecnologias[j];
        if(tecnologia.toLowerCase() === compararCSS){
            return true;
        }
    }
    
    return false;
}

function imprimirEmTela(usuario){
    for(let i = 0; i < usuario.length; i++){
        const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuario[i]);

        if(usuarioTrabalhaComCSS){
            console.log(`O usuário ${usuario[i].nome} trabalha com CSS`);
        }
    }
}

imprimirEmTela(usuarios);
