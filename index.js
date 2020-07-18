// Code your solutions in this file

function writeCards(name , event) {

      let thankYouCard = [] 
     for (let i = 0; i < name.length; i++) {
    thankYouCard.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
  }
  return thankYouCard; 
}



function countdown(i){
  while ( i > 0){
    console.log(i); 
    i--;
  }
  console.log(i); 
}

countdown(10);