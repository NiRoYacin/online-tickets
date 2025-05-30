// const pool = require('../db');
require('../db_connection.js');

const addVoyageur = async (nom, sexe) => {
  const result = await pool.query(
    'INSERT INTO voyageur (nom, sexe) VALUES ($1, $2) RETURNING *',
    [nom, sexe]
  );
  return result.rows[0];
};

const getVoyageurs = async () => {
  const result = await pool.query('SELECT * FROM voyageur');
  return result.rows;
};

const getVoyageurById = async (id) => {
  const result = await pool.query('SELECT * FROM voyageur WHERE id = $1', [id]);
  return result.rows[0];
};

const updateVoyageur = async (id, nom, sexe) => {
  const result = await pool.query(
    'UPDATE voyageur SET nom = $1, sexe = $2 WHERE id = $3 RETURNING *',
    [nom, sexe, id]
  );
  return result.rows[0];
};

const deleteVoyageur = async (id) => {
  await pool.query('DELETE FROM voyageur WHERE id = $1', [id]);
};

module.exports = {
  addVoyageur,
  getVoyageurs,
  getVoyageurById,
  updateVoyageur,
  deleteVoyageur
};