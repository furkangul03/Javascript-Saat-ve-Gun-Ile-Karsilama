let firstName = prompt("İsminizi giriniz")
let info = document.querySelector("#myName")
info.innerHTML = `${firstName}`

// tarih oluşturma fonksiyonu
var aSaat = document.querySelector("#saat"); //aSaat adında bir değişken tanımladık.

function format(saatcek) {
var bSaat = saatcek.toString();
if (bSaat.length == 1) {
return "0" + bSaat;
} else {
return bSaat;
}
}
function saatGuncelleme() { //Burada bilgisayarımızdan saati çekiyoruz.
var tarih = new Date();
var saat = tarih.getHours(); //Burada saati çekiyoruz.
var dakika = tarih.getMinutes(); //Burada dakikayı çekiyoruz.
var saniye = tarih.getSeconds(); //Burada saniyeyi çekiyoruz.
aSaat.textContent = format(saat) + ":" + format(dakika) + ":" + format(saniye); //Burada ekranımıza çıktımızı veriyoruz.
}
setInterval(saatGuncelleme, 1000);

let gun = document.querySelector("#gun")
var tarih = new Date();
var day = tarih.getDay();
if (day = 1) {
  textInfo = "Pazartesi"
} 
else if (day = 2) {
    textInfo = "Salı"
}
else if (day = 3) {
  textInfo = "Çarşamba"
}
else if (day = 3) {
  textInfo = "Perşembe"
}
else if (day = 4) {
  textInfo = "Cuma"
}
else if (day = 5) {
  textInfo = "Cumartesi"
}
else if (day = 6) {
  textInfo = "Pazar"
}
gun.innerHTML = `${textInfo}`