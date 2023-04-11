const {Router}  =  require('express');
const databaseController = require('../controllers/database_controllers');

const router = Router();

//read the data
router.get('/data/:email',databaseController.read);
//create the data;
// router.post('/data',databaseController.create);
//update the data
router.post('/data/:email',databaseController.updateorcreate);

module.exports.router = router;