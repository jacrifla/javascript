let num = [5,8,2,9,3]
console.log(`Nosso vetor é o ${num}`)
num[5] = 6
console.log(num);
num.push(7)
console.log(num);
console.log(`O primeiro valor do vetor é ${num[0]}`);
console.log(`O vetor tem ${num.length} posições`);
num.sort()
console.log(num);
let pos = num.indexOf(8)
if (pos == -1){
    console.log(`O valor não foi encontrado`);
} else {
    console.log(`O valor está na posição ${pos}`);
}