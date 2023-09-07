const router = require('express').Router();
const apiController = require('../controller/apiController');

// router.get('/', async (req, res, next) => {
//   res.send({ message: 'Ok api is working 🚀' });
// });
router.get('', apiController.getApiData);

module.exports = router;
