function kayitOl() {
    //Değişkenlerimi oluşturup HTML'deki hangi inputtan hangi değişkene atanacağını ayarlıyorum.
    var isim = document.getElementById("isim").value;
    var soyisim = document.getElementById("soyisim").value;
    var yas = document.getElementById("yas").value;
    var eposta = document.getElementById("eposta").value;
    var parola = document.getElementById("parola").value;
    //Kullanıcıdan alınan bilgileri localStorage'de eklenip daha sonra kullanılabilmesi için ayarlama yapıyorum.
    localStorage.setItem("isim1", isim)
    localStorage.setItem("soyisim1", soyisim)
    localStorage.setItem("yas1", yas)
    localStorage.setItem("eposta1", eposta)
    localStorage.setItem("parola1", parola)
    //Kayıt işlemi gerçekleştikten sonra ekran üzerindeki inputların içini boşaltıyorum.
    document.getElementById("isim").value="";
    document.getElementById("soyisim").value="";
    document.getElementById("yas").value="";
    document.getElementById("eposta").value="";
    document.getElementById("parola").value="";
    alert("Kullanıcı Kaydı Başarılı!");//Yapılan işlemin başarılı bir şekilde gerçekleştiğini kullanıcıya bilgilendirmek için bir alert kullandık.
}
///////////////////////////////////////////////////////////////////////////////////////////
function girisYap(){
    var eposta=document.getElementById("eposta").value;
    var parola=document.getElementById("parola").value;
    var eposta1=localStorage.getItem("eposta1");
    var parola1=localStorage.getItem("parola1");
    if(eposta==eposta1 && parola==parola1){ //kullanıcının girmiş olduğu bilgiler ile kayıtlı olan bilgileri karşılaştırıyoruz, doğru ise bu blok çalışacak.
        localStorage.setItem("kayitDurumu","kayitli");
        window.location.href="anasayfaEkrani.html";
        kayitliMi()
    }else { //yanlış ise bu blok çalışacak.
        alert("Eposta ve/veya Parola Hatalı")
    }
}
///////////////////////////////////////////////////////////////////////////////////////////
function kayitliMi(){
    var kayitDurumu=localStorage.getItem("kayitDurumu");
    if(kayitDurumu=="kayitli"){
        var sifreDurumu=localStorage.getItem("sifreDurumu");
        if(sifreDurumu != "kaydedildi."){
            var al=confirm("EPosta ve Parolanızı kaydetmek istiyorsanız 'TAMAM', istemiyorsanız 'İPTAL' butonuna basınız.")
            if(al==true){
                var savepassAccept=localStorage.setItem("sifreDurumu","kaydedildi.");
            }else{
                var savepassRefuse=localStorage.setItem("sifreDurumu","kaydedilmedi.");
                 }
        }else if (sifreDurumu == "kaydedildi."){
            console.log("EPosta ve Parola önceden kaydedilmiştir.")
        }else{
        }
    }
    else {
        window.location.href="girisYapEkrani.html";
}
}