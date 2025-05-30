// const pool = require('../db');
require('../db_connection.js');

const addAccount = async (nom_user, mot_de_passe, la_role, identifiant_1) => {
  const result = await pool.query(
    'INSERT INTO account (nom_user, mot_de_passe, la_role, identifiant_1) VALUES ($1, $2, $3, $4) RETURNING *',
    [nom_user, mot_de_passe, la_role, identifiant_1]
  );
  return result.rows[0];
};

const getAccounts = async () => {
  const result = await pool.query('SELECT * FROM account');
  return result.rows;
};

const getAccountById = async (id) => {
  const result = await pool.query('SELECT * FROM account WHERE id = $1', [id]);
  return result.rows[0];
};

const updateAccount = async (id, nom_user, mot_de_passe, la_role, identifiant_1) => {
  const result = await pool.query(
    'UPDATE account SET nom_user = $1, mot_de_passe = $2, la_role = $3, identifiant_1 = $4 WHERE id = $5 RETURNING *',
    [nom_user, mot_de_passe, la_role, identifiant_1, id]
  );
  return result.rows[0];
};

const deleteAccount = async (id) => {
  await pool.query('DELETE FROM account WHERE id = $1', [id]);
};

module.exports = {
  addAccount,
  getAccounts,
  getAccountById,
  updateAccount,
  deleteAccount
};