let sum=0;
for(let i=1; i<=50; i++){
  if(i%5==0){
    continue;
  } console.log(i);
  sum+=i;
  if(sum>200){
    break;
  }
}