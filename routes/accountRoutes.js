const express = require('express');
const router = express.Router();
const {
  createAccount,
  getAllAccounts,
  getAccount,
  updateAccountData,
  deleteAccountData
} = require('../controllers/accountController');

router.post('/accounts', createAccount);
router.get('/accounts', getAllAccounts);
router.get('/accounts/:id', getAccount);
router.put('/accounts/:id', updateAccountData);
router.delete('/accounts/:id', deleteAccountData);

module.exports = router;
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await pool.query(
      'SELECT * FROM account WHERE nom_user = $1 AND mot_de_passe = $2',
      [email, password]
    );

    if (result.rows.length === 0) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const user = result.rows[0];
    res.json({ message: 'Login successful', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error during login' });
  }
});
