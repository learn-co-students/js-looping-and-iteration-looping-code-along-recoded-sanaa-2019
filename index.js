// Code your solutions in this file
let array = ["Lisa", "Kaitlin", "Jan"];



function writeCards(array, event) {

    let thankYouCard = [];
    for (let index = 0; index < array.length; index++) {
        thankYouCard.push(`Thank you, ${array[index]}, for the wonderful ${event} gift!`)


    }

    return thankYouCard;


}


function countdown(i) {
    while (i >= 0) {
        console.log(i);

        i--;
    }
}



