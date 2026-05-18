let n = +prompt("Nhap so")
let isPrime = true
if(n<2){
  isPrime=false;
} else{
  for(let i=2; i<n; i++){
    if(n%i==0){
      isPrime=false;
      break;
    }
  }
}
if(isPrime){
  console.log(`${n} la so nguyen to`);
  
} else{
  console.log(`${n} khong phai la so nguyen to`);
}