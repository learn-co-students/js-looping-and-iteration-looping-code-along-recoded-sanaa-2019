// Code your solutions in this file
let gifts =["Ada", "Brendan", "Ali"];
let fo="birthday";

function writeCards (gifts,fo) {
  let array=[];

  for(let i=0;i<gifts.length;i++){
   array.push(`Thank you, ${gifts[i]}, for the wonderful ${fo} gift!`);
   }     
  
return array;
}

function countdown(cound){
  let count=cound
while (count > 0 ) {
  console.log(count);
  count--;
}
}
