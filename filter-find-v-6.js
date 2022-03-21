const numbers =[12, 24, 30,  45, 10, 21, 43, 5 , 8, 16 ,6]
const bigNumbers = numbers.filter(number => number > 20)
// console.log(bigNumbers);

const smallNumber = numbers.filter(x => x<25)
// console.log(smallNumber);

const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' }
];
const prices = products.filter(product => product.price >= 3000 );
// console.log(prices);

const color = products.find(x => x.color == 'pink');
console.log(color);