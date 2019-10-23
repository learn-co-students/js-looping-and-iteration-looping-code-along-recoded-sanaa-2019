// Code your solutions in this file
function writeCards(names,e)
{
  let arr=[];
  for(let i=0;i<names.length;i++)
  {
    arr[i]=`Thank you, ${names[i]}, for the wonderful ${e} gift!`;
  }
  return arr;
}

function countdown(n)
{
  while(n>=0)
  {
    console.log(n);
    n--;
  }
}