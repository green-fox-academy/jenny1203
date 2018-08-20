const watchlist: string[] = [];

let securityAlcoholLoot: number = 0;

const queue: any[] = [
  { name: 'Amanda', alcohol: 10, guns: 1 },
  { name: 'Mark', alcohol: 0, guns: 0 },
  { name: 'Dolores', alcohol: 0, guns: 1 },
  { name: 'Wade', alcohol: 1, guns: 1 },
  { name: 'Anna', alcohol: 10, guns: 0 },
  { name: 'Rob', alcohol: 2, guns: 0 },
  { name: 'Joerg', alcohol: 20, guns: 0 }
];

function securityCheck(queue: any[]){
    let withoutGun: any[] = [];
    queue.forEach(element => {
        if(element['guns'] > 0){
           watchlist.push(element['name']);
           element['guns'] = 0;
        }else{
            withoutGun.push(element['name']);
        }
        if(element['alcohol'] > 0){
            securityAlcoholLoot += (element['alcohol']);
            element['alcohol'] = 0;
        }
    });return withoutGun;
}

console.log("Go in: " + securityCheck(queue));
console.log("Had gun: " + watchlist);