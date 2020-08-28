const usuarios = [
    {
      nome: "Salvio",
      receitas: [115.3, 48.7, 98.3, 14.5],
      despesas: [85.3, 13.5, 19.9]
    },
    {
      nome: "Marcio",
      receitas: [24.6, 214.3, 45.3],
      despesas: [185.3, 12.1, 120.0]
    },
    {
      nome: "Lucia",
      receitas: [9.8, 120.3, 340.2, 45.3],
      despesas: [450.2, 29.9]
    }
  ];

 
  function calculaSaldo(receitas, despesas){
    let saldo = somaNumeros(receitas) - somaNumeros(despesas);
    return saldo;
  }

  function somaNumeros(numeros){
    let soma = 0;
    for(let i = 0; i < numeros.length; i++){
        soma = soma + numeros[i];
    }
    return soma;
  }

  function exibirUsuariosEmTela(usuario){
      let saldo;
    for(let i = 0; i < usuario.length; i++){
        saldo = calculaSaldo(usuario[i].receitas, usuario[i].despesas);
        if(saldo < 0){
            console.log(`${usuario[i].nome} possui saldo NEGATIVO de ${saldo.toFixed(2)}`); //Fixar 2 casas decimais
        } else if(saldo >= 0){
            console.log(`${usuario[i].nome} possui saldo POSITIVO de ${saldo.toFixed(2)}`);
        }
    }
  }

  exibirUsuariosEmTela(usuarios);