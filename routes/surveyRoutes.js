const mongoose = require('mongoose');
const authLogin = require('../middlewares/authLogin');
const authCredits = require('../middlewares/authCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/_email_template/email_template');

const Survey = mongoose.model('surveys');

module.exports = app => {
    app.get('/api/surveys/feedback-thanks', (req, res) => {
        res.send();
    });

    app.post('/api/surveys', authLogin, authCredits, async (req, res) => {

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
        
        try{    
            await mailer.send();
            await survey.save();
            req.user.credits -= 1;
            const user = await req.user.save();

            res.send(user);
        }catch(err){
            res.status(422).send(err);
        }

    });
};