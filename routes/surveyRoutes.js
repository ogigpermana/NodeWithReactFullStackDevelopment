const mongoose = require('mongoose');
const authLogin = require('../middlewares/authLogin');
const authCredits = require('../middlewares/authCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/_email_template/emailTemplate');

const Survey = mongoose.model('surveys');

module.exports = app => {
    app.post('/api/surveys', authLogin, authCredits, (req, res) => {

        const { title, subject, body, recipients } = req.body;

        const survey = new Survey({
            title,
            subject,
            body,
            recipients: recipients.split(',').map(email => ({ email})), 
            _user: req.user.id,
            dateSent: Date.now()
        });

        // Great place to send an email
        const mailer = new Mailer(survey, surveyTemplate(survey));
        mailer.send();
    });
};