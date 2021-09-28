var a = prompt("Nhập số a:")
var b = prompt("Nhập số b:")
var c = prompt("Nhập số c:")
var delta = b*b - 4*a*c

if (delta < 0)
{
document.write(" Phương trình vô nghiệm ");
}
    else if (delta ==0)
{
    x = -b/2*a;
    document.nhap.f.value =x;
}
    else if (delta > 0)
{
    x1 = (-b + Math.sqrt(delta))/(2*a);
    document.nhap.d.value =x1;
    x2 = (-b - Math.sqrt(delta))/(2*a);
    document.nhap.e.value =x2;
}