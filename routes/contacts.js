const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/');

/* GET home page. */
router.get('/', contactsController.getAll);

router.get('/:id', contactsController.getSingle);

router.post('/', contactsController.createContact);

router.put('/:id', contactsController.updateContact);

router.delete('/:id', contactsController.removeContact);

module.exports = router;
