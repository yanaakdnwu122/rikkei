let a = +prompt("Nhap so a")
let b = +prompt("Nhap so b")
if(isNaN(a)&&isNaN(b)){
  console.log("Nhap so!");
  
} else{
console.log(`Tong: ${a+b}, Hieu: ${a-b}, Tich: ${a*b}, Thuong: ${a/b}, So du: ${a%b}`);
}

