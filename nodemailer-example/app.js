
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

const transportConfig = {
    host: "mail.adm.tools",
    port: 25,
    secure: false,
    auth: {
        user: "info@sled-studio.com",
        pass: process.env.PASSWORD
    }
};

const transporter = nodemailer.createTransport(transportConfig);

// устанавливаем параметры письма, которое мы будем отправлять

const newEmailTemplate = {
    from: "info@sled-studio.com",
    to: "bogdan.lyamzin.d@gmail.com",
    subject: "New roder from site",
    text: "<p><strong>Тема: </strong> Новый заказ с сайта</p>"
};

transporter
    .sendMail(newEmailTemplate)
    .then(info => console.log(info))
    .catch(error => console.log(error))
/*
app.post("/orders", async (req, res, next)=> {
    try {
        const result = await Order.create(req.body);
        const to = req.body.email;
        const text = `New order from site. FIO: ${req.body.name} ${req.body.lastName}`
        const newMail = {...newEmailTemplate, to, text};
        transporter
            .sendMail(newMail)
            .then(info => console.log(info))
            .catch(error => console.log(error))
    }
    catch (error){
        next(error)
    }
});
*/


/*
SMTP, POP3, IMAP сервер:	mail.adm.tools
Порт SMTP сервера:	25 или 2525 или 465 (SMTP+SSL)
*/