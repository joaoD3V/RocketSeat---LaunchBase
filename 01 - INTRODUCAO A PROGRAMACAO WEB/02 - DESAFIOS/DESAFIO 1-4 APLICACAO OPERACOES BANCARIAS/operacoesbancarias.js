const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
  };


  function createTransaction(transaction){
     user.transactions.push(transaction)
     if (transaction.type === "credit"){
         user.balance = user.balance + transaction.value;
     } else if(transaction.type === "debit"){
        user.balance = user.balance - transaction.value;
     }
  }

  function getHigherTransactionByType(typeTransaction){
    let higherNumber;
    let higherObject;        
    for(let i = 0; i < user.transactions.length; i++){
        if(user.transactions[i].type === typeTransaction){
            if(higherNumber == undefined){
                higherNumber = user.transactions[i].value;
                higherObject = user.transactions[i];
            }
            if(user.transactions[i].value > higherNumber){
                higherNumber = user.transactions[i].value;
                higherObject = user.transactions[i];
            }
        }
      
   }

   return higherObject;
  
    
  }

function getAverageTransactionValue(){
    let soma = 0;
    let media;
    let totalTransaction = user.transactions.length;
    
    for (let transaction of user.transactions){
        soma = soma + transaction.value;
    }

    media = soma/totalTransaction;
    console.log(media);
    

}

function getTransactionsCount(){
    let typeCredit = 0;
    let typeDebit = 0;
    let countTypes;
    
    for(let transaction of user.transactions){
        if(transaction.type === "credit"){
            typeCredit++;
        } else if(transaction.type == "debit"){
            typeDebit++;
        }
    }

    countTypes = {
        credit: typeCredit,
        debit: typeDebit
    }

    console.log(countTypes);
}

createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });



console.log(user.balance);

console.log(getHigherTransactionByType("credit"));
console.log(getHigherTransactionByType("debit"));

getAverageTransactionValue();

getTransactionsCount();

//  console.log(user);