var number = parseInt(prompt("Nhập số cần kiểm tra"));
var mod = (number % 2);
if (mod == 0){
    document.write(number + " là số chẵn");
}
else if (mod == 1){
    document.write(number + " là số lẽ");
}
else{
    document.write("Ký tự bạn nhập không phải số");
}