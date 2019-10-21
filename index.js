function writeCards(input,event){
    let p=[];
for(let i=0;i<input.length;i++){
   p.push(`Thank you, ${input[i]}, for the wonderful ${event} gift!`);

}
return p;
}
function countdown(input){
    for (let countdown = input; countdown >=0; countdown--) {
        console.log(countdown);
      }
}