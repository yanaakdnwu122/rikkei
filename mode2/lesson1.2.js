function kiemTraDuThi(chuyenCan, tb, giayPhep) {

if(giayPhep==true || chuyenCan>80 && tb>=5){
  console.log("Thi sinh du dieu kien du thi!");
  return true;
} else {
  console.log("Thi sinh khong du dieu kien du thi!");
  return false;
}
}
kiemTraDuThi(70,6,false);