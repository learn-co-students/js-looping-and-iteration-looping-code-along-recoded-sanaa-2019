// Code your solutions in this file
const nameArr=["Ada", "Brendan", "Ali"];
const event="birthday";
function writeCards(names, event)
{
let thankMsg=[];
    for (let i=0; i < names.length; i++)
    {
        thankMsg.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return thankMsg;
}

function countdown(num)
{
    while(num>=0)
    {
        console.log(num--);
    }
}
writeCards(nameArr, "event");
countdown(10);

