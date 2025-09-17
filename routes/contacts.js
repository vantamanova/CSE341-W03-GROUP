const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts');
const validation = require('../middlewares/validation'); // W03 Validation middleware

router.get('/', contactsController.getAll);

router.get('/:id', contactsController.getSingle);

router.post('/', validation.saveContact, contactsController.createContact); // W03 Validation middleware used here

router.put('/:id', validation.saveContact, contactsController.updateContact); // W03 Validation middleware used here

router.delete('/:id', contactsController.deleteContact);

module.exports = router;
