
let userName=prompt("isminizi yazınız :"); //Kullanıcıdan isim bilgisini almak için prompt fonksiyonunu kullanıyoruz. 

function showTime(){ 
  let myName=document.querySelector("#myName"); //HTML içinde myName id'sine sahip bir elementi seçmek için document.querySelector kullanıyoruz. Bu element, kullanıcının ismini göstereceğimiz yerdir.
  myName.innerHTML=userName; //Seçilen elementin içeriğini, kullanıcıdan alınan userName değişkeniyle güncelliyoruz. 
  
  let myClock=document.querySelector("#myClock"); 
  let date=new Date(); 
  let days=["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]; //Haftanın günlerini içeren bir dizi oluşturuyoruz.

  myClock.innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${days[date.getDay()]} `
}
//***myClock elementinin içeriğini, saat, dakika, saniye ve gün bilgileriyle güncelliyoruz. Template literal (${}) kullanarak saat, dakika, saniye ve gün bilgilerini birleştiriyoruz. getHours, getMinutes, getSeconds ve getDay metodlarıyla o anki saat, dakika, saniye ve gün bilgilerini alıyoruz. days[date.getDay()] ifadesiyle, haftanın gününü diziden alıyoruz.***

setInterval(showTime,1000); //setInterval fonksiyonunu kullanarak showTime fonksiyonunu 1 saniyede bir çağırıyoruz.