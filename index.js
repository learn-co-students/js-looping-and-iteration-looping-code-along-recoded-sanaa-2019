// Code your solutions in this file


// const name = ["Ada", "Brendan", "Ali"];
// const event = ["birthday"];

function writeCards(name , event) {

      let thankYouCard = [] //Collect the messages in an array
     for (let i = 0; i < name.length; i++) {
    // console.log(`Thank you, ${name[i]}, for the wonderful ${event} gift! `);  // dont have to display
    thankYouCard.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`); // push to the new array that is been display
  }
  return thankYouCard; //and and returning the new array.
}

// writeCards([ "Lisa", "Kaitlin", "Jan" ], "surprise");

// let i =0;
function countdown(i){
  while ( i > 0){
    console.log(i); //log while you countdown
    i--;
  }
  console.log(i); //log everytime you count
}

countdown(10);
