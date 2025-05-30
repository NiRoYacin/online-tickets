const express = require('express');
const bcrypt = require('bcrypt');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const pool = require('./db_connection.js');


// // ✅ إنشاء الجداول تلقائيًا إذا لم تكن موجودة
// const createTables = async () => {
//   await pool.query(`
//     CREATE TABLE IF NOT EXISTS voyageur (
//       id SERIAL PRIMARY KEY,
//       nom VARCHAR(20),
//       sexe VARCHAR(10)
//     );
//     CREATE TABLE IF NOT EXISTS account (
//       id SERIAL PRIMARY KEY,
//       nom_user VARCHAR(20) UNIQUE,
//       mot_de_passe VARCHAR(255),
//       la_role VARCHAR(255),
//       identifiant_1 TEXT
//     );
//     CREATE TABLE IF NOT EXISTS associe_a (
//       account_id INTEGER REFERENCES account(id),
//       voyageur_id INTEGER REFERENCES voyageur(id),
//       PRIMARY KEY (account_id, voyageur_id)
//     );
//   `);
// };
// createTables();

//  تسجيل حساب جديد
app.post('/register', async (req, res) => {
  const { nom_user, mot_de_passe ,email} = req.body;
  try {
    // تشفير كلمة المرور
    // const hashedPassword = await bcrypt.hash(mot_de_passe, 10);

    // إدراج حساب جديد
    const accountResult = await pool.query(
      `INSERT INTO account (nom_user, mot_de_passe, la_role) VALUES ($1, $2, $3) RETURNING *`,
      [email, mot_de_passe, 'voyageur']
    );

    const accountId = accountResult.rows[0].id;

    // إنشاء سجل voyageur وربطه بالحساب
    const voyageurResult = await pool.query(
      `INSERT INTO voyageur (nom, sexe) VALUES ($1, $2) RETURNING *`,
      [nom_user, 'not_specified']
    );

    const voyageurId = voyageurResult.rows[0].id;

    // الربط في associe_a
    await pool.query(
      `INSERT INTO associe_a (account_id, voyageur_id) VALUES ($1, $2)`,
      [accountId, voyageurId]
    );

    res.status(201).json({ account: accountResult.rows[0], voyageur: voyageurResult.rows[0] });
  } catch (err) {
    console.error('Registration error:', err);
    res.status(500).json({ message: 'Error creating account', error: err.message });
  }
});

// ✅ تسجيل الدخول
app.post('/login', async (req, res) => {
  const { nom_user, mot_de_passe } = req.body;
  if (!nom_user || !mot_de_passe) {
     return res.status(405).json({ message: 'User not found'+ "nom_user:" + nom_user + ' mot de passe : ' + mot_de_passe });
    // return res.status(400).json({ message: 'Username and password are required' });
  }
  try {
    const result = await pool.query(`SELECT * FROM account WHERE nom_user = $1`, [nom_user]);

    if (result.rows.length === 0) {
      return res.status(401).json({ message: 'User not found'+ "nom_user" + nom_user + ' mot de passe : ' + mot_de_passe });
    }

    const user = result.rows[0];
    // const validPassword = await bcrypt.compare(mot_de_passe, user.mot_de_passe);
    const validPassword = true;

    if (!validPassword) {
      return res.status(401).json({ message: 'Incorrect password' });
    }

    // res.status(200).json({ message: 'Login successful', user });
    if (user.la_role === 'voyageur') {
      // document.getElementById('loginButton').style.display = 'none';
      return res.redirect('/index.html?value=success');
    }
    if (user.la_role === 'admin') {
      return res.redirect('/view/Admin/index.html');
    }
    // res.status(200).json({ message: 'Login successful', role: user.la_role });
    // return res.redirect('/view/Admin/index.html');
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ message: 'Login failed', error: err.message });
  }
});


// ✅ بدء السيرفر
app.listen(3000, () => {
  console.log('🚀 Server is running at http://localhost:3000');
});
