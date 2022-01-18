const nodemailer = import('nodemailer')


// function saveInfo(e) {
//     const name = document.querySelector("#inputName").value;
//     const email = document.querySelector("#inputEmail").value;
//     const phone = document.querySelector("#inputPhone").value;
//     const message = document.querySelector("#inputMessage").value;
  
//     if (!name && !email && !phone && !message) {
//       alert("Lütfen Formu Doldurunuz");
//       return false;
// }}



function sendMail() {

    let transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'elsyazilimsendmail@gmail.com',
            pass: 'cnzcfleblonnvgos'
        }
    })
    
    let mailOptions = {
        from: 'elsyazilimsendmail@gmail.com',
        to: 'oguzhanagir1@gmail.com',
        subject: 'ELS Yazılım Web Sitesi İletişim Formu',
        text: 'deneme bir maildir els den gönderildi'
    
    }

    transporter.sendMail(mailOptions,(err,data) =>{
        if(err) console.log(err)
        else console.log('Mail Başarılı Bir Şekilde Gönderildi.')
    })
}

