const {
  addAccount,
  getAccounts,
  getAccountById,
  updateAccount,
  deleteAccount
} = require('../models/accountModel');

const createAccount = async (req, res) => {
  const { nom_user, mot_de_passe, la_role, identifiant_1 } = req.body;
  try {
    const newAccount = await addAccount(nom_user, mot_de_passe, la_role, identifiant_1);
    res.status(201).json(newAccount);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAllAccounts = async (req, res) => {
  try {
    const accounts = await getAccounts();
    res.status(200).json(accounts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAccount = async (req, res) => {
  try {
    const account = await getAccountById(req.params.id);
    if (account) {
      res.status(200).json(account);
    } else {
      res.status(404).json({ message: 'Account not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateAccountData = async (req, res) => {
  const { nom_user, mot_de_passe, la_role, identifiant_1 } = req.body;
  try {
    const updatedAccount = await updateAccount(req.params.id, nom_user, mot_de_passe, la_role, identifiant_1);
    res.status(200).json(updatedAccount);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteAccountData = async (req, res) => {
  try {
    await deleteAccount(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createAccount,
  getAllAccounts,
  getAccount,
  updateAccountData,
  deleteAccountData
};