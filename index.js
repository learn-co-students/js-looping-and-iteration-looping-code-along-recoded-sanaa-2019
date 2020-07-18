
function writeCards(name , event) {

      let thankYouCard = [] 
     for (let i = 0; i < name.length; i++) {
    thankYouCard.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
  }
  return thankYouCard;
}
writeCards("heba","birthday");



function countdown(i){
  while ( i > 0){
    console.log(i); //log while you countdown
    i--;
  }
  console.log(i); //log everytime you count
}
countdown(10);