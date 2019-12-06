## Startup Reviewer - Udemy Node with React - Fullstack Web Development Course By Stephen Grider

Aplikasi ini merupakan aplikasi tentang masukan, voting atu feedback dari setiap employees, dimana setiap employess akan dikirimkan sebuah email yang harus di isi sebagai feedback terhadap aplikasi yang digunakan

untuk penggunaan token aplikasi ini menggunakan passport-google-oauth20
file dev.js sengaja tidak di upload dikarenakan token itu bersifat credential, akan tetapi cara penggunaannya tidak begitu sulit hanya membuat sebuah folder config yang berisi file dev.js dimana isinya seperti berikut ini :

```
// dev.js for development purposes only - localhost
module.exports = {
    googleClientID : '7534027975378-isidengangoogleclientid',
    googleClientSecret: 'SlKisidengangoogleclientsecret',
    mongoURI: 'mongodb+srv://abcdef:abcdef@namacluster-ajce3.mongodb.net/test?retryWrites=true&w=majority',
    cookieKey: 'isidenganlowerdanuperalpabetacakIhfwjmOuhiwhifhwLOIHJQWwjurowur'
};
```

untuk mencoba di local server cara seperti dibawah ini :

``
http://localhost:5000/auth/google
http://localhost:5000/auth/google/callback
http://localhost:5000/api/current_user
http://localhost:5000/api/logout
``

penambahan nodemon pada aplikasi untuk membantu me restart local server secara otomatis pada saat ada perunahan pada file, contoh jika kita ubah data yang ada pada file index.js maka secara otomatis nodemon akan me start server ulang

contoh penerapannya : `` npm run dev``

concurrently merupakan module atau library yang digunakan untuk menjalankan dua host sekaligus server dan client
untuk lebih jelasnya silahkan buka file package.json yang ada pada root project aplikasi ini

hasilnya bisa dilihat pada logs yang ada di terminal!

demo aplikasinya link dibawah ini:
[Surel Info Feedback](https://surelinfofeedback.herokuapp.com/)