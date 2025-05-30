const {
  addVoyageur,
  getVoyageurs,
  getVoyageurById,
  updateVoyageur,
  deleteVoyageur
} = require('../models/voyageurModel');

const createVoyageur = async (req, res) => {
  const { nom, sexe } = req.body;
  try {
    const newVoyageur = await addVoyageur(nom, sexe);
    res.status(201).json(newVoyageur);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAllVoyageurs = async (req, res) => {
  try {
    const voyageurs = await getVoyageurs();
    res.status(200).json(voyageurs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getVoyageur = async (req, res) => {
  try {
    const voyageur = await getVoyageurById(req.params.id);
    if (voyageur) {
      res.status(200).json(voyageur);
    } else {
      res.status(404).json({ message: 'Voyageur not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateVoyageurData = async (req, res) => {
  const { nom, sexe } = req.body;
  try {
    const updatedVoyageur = await updateVoyageur(req.params.id, nom, sexe);
    res.status(200).json(updatedVoyageur);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteVoyageurData = async (req, res) => {
  try {
    await deleteVoyageur(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createVoyageur,
  getAllVoyageurs,
  getVoyageur,
  updateVoyageurData,
  deleteVoyageurData
};