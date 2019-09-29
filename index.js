// Code your solutions in this file
const friends = ["Lisa", "Kaitlin", "Jan"];
function writeCards(friends,eName){
  const messages = [];
  for(let i = 0; i < friends.length; i++){
    messages.push(`Thank you, ${friends[i]}, for the wonderful ${eName} gift!`);
  }
  return messages;
}
writeCards(friends, "birthday");

function countdown(num){
  while (num >= 0) {
    console.log(num);
    num--;
  }
}

countdown(10);
