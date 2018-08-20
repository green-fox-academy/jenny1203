const accounts: any[] = [
  { clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
  { clientName: 'Vladimir', accountNumber: 43546731, balance: 5204100071.23 },
  { clientName: 'Sergei', accountNumber: 23456311, balance: 1353600.0 }
];
// Create function that returns the name and balance of cash on an account in a list
// getNameAndBalance(11234543);
// should return: ['Igor', 203004099.2]
function getNameAndBalance(accountNumber){
    let name: string[] = [];
    for(let index = 0; index < accounts.length; index++){
        if(accountNumber === accounts[index]['accountNumber']){
            name[0] = accounts[index]['clientName'];
            name[1] = accounts[index]['balance'];
        }
    }return name;
}

function checkAccounts(toAccountNumber, fromAccountNumber): boolean{
        array.forEach(element => {
            if (element['accountNumber'] === toAccountNumber){

            }
        });
}

function transferCash(accounts, toAccountNumber, fromAccountNumber, transferCash){
    for(let index = 0; index < accounts.length; index++){
        if(accounts[index]['accountNumber'] === toAccountNumber){
            accounts[index]['balance'] = accounts[index]['balance'] + transferCash;
        }else if(accounts[index]['accountNumber'] === fromAccountNumber){
            accounts[index]['balance'] = accounts[index]['balance'] - transferCash;
        }
    }
    
}
console.log(getNameAndBalance(11234543));