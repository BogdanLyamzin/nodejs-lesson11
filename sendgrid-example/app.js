const sgMail = require("@sendgrid/mail");
const dotenv = require("dotenv");
dotenv.config();

const {SENDGRID_API_KEY} = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const emailConfig = {
    from: "bogdan.lyamzin.d@gmail.com",
    to: "garadaw542@whyflkj.com",
    subject: "New roder from site",
    text: "<p><strong>Тема: </strong> Новый заказ с сайта</p>",
    html: "<p><strong>Тема: </strong> Новый заказ с сайта</p>"
};

sgMail.send(emailConfig)
    .then(()=> {
        console.log("Email sent")
    })
    .catch((error)=> {
        console.log(error)
    });
