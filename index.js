// Code your solutions in this file
const Array=['Lisa','Kaitlin','Jan'];

function writeCards(Array){
    for (let i=0;i<Array.length;i++){
        console.log('Thank you, ' +Array[i]+ ', for the wonderful surprise gift!')
        Array[i]='Thank you, ' +Array[i]+ ', for the wonderful surprise gift!';
    }

    return Array;
}
writeCards(Array);
console.log(Array);

let inputNum = 10;

function countDown(inputNum){
    while (inputNum>=0){
        console.log(inputNum);
        inputNum--;
    }
}
countDown(inputNum);
