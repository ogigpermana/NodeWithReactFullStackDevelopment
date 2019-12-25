const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');

require('./models/Survey');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => console.log('DB Connected!'))
.catch(err => {
console.log(Error, err.message);
});

const app = express();
 app.use(bodyParser.json());
// line 14 to 21 used for authentication purposes to set cookie into browser about 30 days
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey] 
    })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);

if(process.env.NODE_ENV === 'production'){
    // Express will serve up production assets
    // like our main.xxxxx.js, or 2.17xxx.chunk.css
    app.use(express.static('client/build'));

    // Express will serve up the index.html file
    // if it does not recognize the route
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT);
