const express = require('express');
const router = express.Router();
const {
  createVoyageur,
  getAllVoyageurs,
  getVoyageur,
  updateVoyageurData,
  deleteVoyageurData
} = require('../controllers/voyageurController');

router.post('/voyageurs', createVoyageur);
router.get('/voyageurs', getAllVoyageurs);
router.get('/voyageurs/:id', getVoyageur);
router.put('/voyageurs/:id', updateVoyageurData);
router.delete('/voyageurs/:id', deleteVoyageurData);

module.exports = router;