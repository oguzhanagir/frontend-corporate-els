


function smtpMail() {

    const name = document.querySelector("#inputName").value;
    const email = document.querySelector("#inputEmail").value;
    const phone = document.querySelector("#inputPhone").value;
    const mesaj = document.querySelector("#inputMesaj").value;
  
    if (!name || !email || !phone || !mesaj) {
      alert("Lütfen Eksiksiz Doldurunuz.");
      return false;
    }
    else{

        Email.send({
            Host: "smtp.gmail.com",
            Username : "elsyazilimsendmail@gmail.com",
            Password : "cnzcfleblonnvgos",
            To : 'oguzhanagir1@gmail.com',
            
            From : "elsyazilimsendmail@gmail.com",
            Subject : "ELS Yazılım Contact Mesaj",
            Body : email+ "<br>" + name + "<br>" + phone + "<br>" + mesaj,
           
            }).then(
                message => alert("Mail Gönderildi")
            );
    }



}

