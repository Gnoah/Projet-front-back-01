const express = require('express');
const control = require('../controller/controller');
const router = express.Router();

//Affichage
router.get('/list', control.afficher)

//CREATE
router.post('/list', control.ajouter)

//UPDATE
router.put('/list',control.modifier)

//DELETE
router.delete('/list',control.effacer)

router.get('/test',control.affichetest)

module.exports = router;
