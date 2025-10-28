// 1 git init -y
// 2 buat file .gitignore dan .env
// 3 gitignore /node_modules dan .env
// 4 buat file .sequelizerc 
// 5 npm install express mysql2 nodemon sequelize sequelize-cli dotenv
// 6 npx sequelize init
// 7 konifgurasi config/config.js
// 8 buat file index.js diluar
// 9 membuat github repo
// git init
// git branch -M main
// git remote add origin https://github.com/syawalqi/248_ORM.git
// 10 membuat file /models/komik.js
// 11 buka mysql workbench buat database 
// 12 create schema perpustakaan
// 13 buka file .env isi konfigurasi database
// password Gms041204#
// 14 ke komik.js konfigurasi
// 15 ke index.js konfigurasi
// buka package.json
// 16 tambahkan script 
// "start": "nodemon index.js"
// 17 jalankan npm start
// 18 lanjutkan membuat crud di index.js post dan get


const express = require("express");
const app = express();
const db = require("./models");
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`Server berjalan pada http://localhost:${port}`);
})

db.sequelize.sync().then((result) => {
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
})

.catch((err) => {
    console.log(err);
});

app.post("/komik", async (req, res) => {
    const data = req.body;
    try {
        const komik = await db.Komik.create(data);
        res.send(komik);
    }
    catch (err) {
        res.send({ err });
    }
});

app.get("/komik", async (req, res) => {
    try {
        const komiks = await db.Komik.findAll();
        res.send(komiks);
    }
    catch (err) {
        res.send({ err });
    }
});
