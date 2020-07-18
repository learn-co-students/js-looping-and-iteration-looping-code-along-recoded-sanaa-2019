// Code your solutions in this file

const name = ["Lisa", "Katlin", "jan"];

function writeCards(name) {

  for (let i = 0; i < name.length; i++)
  //  for (let j=0; j<birthday.length;j++ )
  {
      // let thanks=[];
let  thanks = ([`Thank you, ${name[i]}, for the wonderful surprise gift! `]);
 // return surprise
 console.log(thanks);
  }
// return surprise;
}

 writeCards(name);

function countDown(){
  let nu = 10;
while (nu >=0 ){
  console.log(nu --);
}
}
countDown(10);
