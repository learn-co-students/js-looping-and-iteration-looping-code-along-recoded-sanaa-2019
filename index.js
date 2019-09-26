// Code your solutions in this file
function writeCards(writeCardsArray, name) {
    let thankYouMessage = [];
    for (let index = 0; index < writeCardsArray.length; index++) {
        thankYouMessage.push(  "Thank you, " + writeCardsArray[index] + ", for the wonderful " + name + " gift!");

    }
    return thankYouMessage;
}
function countdown(postiveNumber) {
    while (postiveNumber> -1 ) {
        console.log(postiveNumber);
        postiveNumber--;
    }
}
writeCards(["Lisa", "Kaitlin", "Jan"], "surprise gift")



