// const nodemailer = require('nodemailer')


// function saveInfo(e) {
//     const name = document.querySelector("#inputName").value;
//     const email = document.querySelector("#inputEmail").value;
//     const phone = document.querySelector("#inputPhone").value;
//     const message = document.querySelector("#inputMessage").value;
  
//     if (!name && !email && !phone && !message) {
//       alert("Lütfen Formu Doldurunuz");
//       return false;
// }}

// let transporter = nodemailer.createTransport({
//     service:'gmail',
//     auth:{
//         user:'elsyazilimsendmail@gmail.com',
//         pass: 'cnzcfleblonnvgos'
//     }
// })

// let mailOptions = {
//     from: 'elsyazilimsendmail@gmail.com',
//     to: 'oguzhanagir1@gmail.com',
//     subject: 'ELS Yazılım Web Sitesi İletişim Formu',
//     text: 'deneme bir maildir els den gönderildi'

// }

// function sendMail() {
//     transporter.sendMail(mailOptions,(err,data) =>{
//         if(err) console.log(err)
//         else console.log('Mail Başarılı Bir Şekilde Gönderildi.')
//     })
// }

function smtpMail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "elsyazilim",
	Password : "cnzcfleblonnvgos",
	To : 'oguzhanagir1@gmail.com',
	From : "elsyazilimsendmail@gmail.com",
	Subject : "Smtp den gönderildi",
	Body : "els mesaj içerği",
	}).then(
		message => alert("mail sent successfully")
	);
}