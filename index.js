// Code your solutions in this file


function writeCards(names,event){
  let cards=[];
 for(let i=0;i<names.length;i++) 
{

  cards.push("Thank you, "+ names[i]+", for the wonderful "+event +" gift!");

 }
 return cards;
} 

writeCards(['Lisa','Kaitlin','Kaitlin'],'surprise');





function countdown(num){
let i=num;
  while(i>=0)
  {
    console.log(i);
      i--;
  }

}

countdown(10);