const mongose = require('mongoose');
// const Schema = mongose.Schema; kode ini merupakan refresentatif dari kode baris ketiga
const { Schema } = mongose;

const userSchema = new Schema({
    googleId: String
});

mongose.model('users', userSchema);