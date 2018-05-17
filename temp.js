/*
objetos (instâncias) da classe Deal
*/
//toda classe que possui um constructor() só pode ser instânciada com o operador new

let today = new Date();
//usar let ajuda as variáveis (let) a permanecerem apenas dentro do escopo, do bloco que ela faz parte
let deal0 = new Deal (today, 32, 62.28);
deal0.quantity = 23;
deal0._quantity = 23;

today.setDate(25);
deal0.date.setDate(25);

console.log(deal0.quantity);
console.log(deal0.date);
console.log(deal0.valuation);
console.log(deal0.volume);
//var volume0 = deal0.quantity * deal0.valuation;


/*
var deal1 = new Deal;
deal1.quantity = 50;
console.log(deal1);

var deal2 = new Deal;
deal2.quantity = 100;
console.log(deal2);
*/