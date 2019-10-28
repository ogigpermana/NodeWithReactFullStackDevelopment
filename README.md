## Startup Reviewer - Udemy Node with React - Fullstack Web Development Course By Stephen Grider

Aplikasi ini merupakan aplikasi tentang masukan, voting atu feedback dari setiap employees, dimana setiap employess akan dikirimkan sebuah email yang harus di isi sevagai feedback terhadap aplikasi yang digunakan

untuk penggunaan token aplikasi ini menggunakan passport-google-oauth20
file keys.js sengaja tidak di upload dikarenakan token itu bersifat credential, akan tetapi cara penggunaannya tidak begitu sulit hanya membuat sebuah folder config yang berisi file keys.js dimana isinya seperti berikut ini :

```
module.exports = {
    googleClientID : '7534027975378-isidengangoogleclientid',
    googleClientSecret: 'SlKisidengangoogleclientsecret'
};
```

untuk mencoba di local server cara seperti dibawah ini :

``
http://localhost:9000/auth/google
``

penambahan nodemon pada aplikasi untuk membantu me restart local server secara otomatis pada saat ada perunahan pada file, contoh jika kita ubah data yang ada pada file index.js maka secara otomatis nodemon akan me start server ulang

contoh penerapannya : `` npm run dev``

hasilnya bisa dilihat pada logs yang ada di terminal!

demo aplikasinya link dibawah ini:
[Startup Reviewer](https://startup-reviewer.herokuapp.com/)