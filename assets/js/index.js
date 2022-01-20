function smtpMail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "elsyazilimsendmail@gmail.com",
	Password : "cnzcfleblonnvgos",
	To : 'oguzhanagir1@gmail.com',
	From : "elsyazilimsendmail@gmail.com",
	Subject : "Smtp den gönderildi",
	Body : "els mesaj içerği",
	}).then(
		message => alert("mail sent successfully")
	);
}