const accounts: any[] = [
  { clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
  { clientName: 'Vladimir', accountNumber: 43546731, balance: 5204100071.23 },
  { clientName: 'Sergei', accountNumber: 23456311, balance: 1353600.0 }
];

// név és balance kiírása
function getNameAndBalance(accountNumber){
    let name: string[] = [];
    for(let index = 0; index < accounts.length; index++){
        if(accountNumber === accounts[index]['accountNumber']){
            name[0] = accounts[index]['clientName'];
            name[1] = accounts[index]['balance'];
        }
    }return name;
}

// rávizsgál, hogy a from és a to létezik-e
function checkAccounts(accounts, toAccountNumber, fromAccountNumber): boolean{
    let foundToAccount: boolean = false;
    let foundFromAccount: boolean = false;
    accounts.forEach(element => {
        if (element['accountNumber'] === toAccountNumber){
            foundToAccount = true;
        }
        if (element['accountNumber'] === fromAccountNumber){
            foundFromAccount = true;
        }
    });
    return foundToAccount && foundFromAccount;
}

// ha a to és a from létezik utalja az összeget
function transferCash(accounts, toAccountNumber, fromAccountNumber, transferCash):string{
    let correctAccounts = checkAccounts(accounts, toAccountNumber, fromAccountNumber);
    if(correctAccounts){
        for(let index = 0; index < accounts.length; index++){
            if(accounts[index]['accountNumber'] === toAccountNumber){
                accounts[index]['balance'] = accounts[index]['balance'] + transferCash;
            }else if(accounts[index]['accountNumber'] === fromAccountNumber){
                accounts[index]['balance'] = accounts[index]['balance'] - transferCash;
            }return "transaction succes.";
        }
    }else{
        return "404 - account not found";
    }
    
}
console.log(getNameAndBalance(11234543));
console.log(transferCash(accounts, 11234543, 43546731, 100));
console.log(getNameAndBalance(11234543));