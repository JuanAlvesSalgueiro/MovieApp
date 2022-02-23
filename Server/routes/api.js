const { Router } = require('express');

const { userRegister, userLogin } = require('../controllers/users');

const { addFavMovie } = require('../controllers/addFavMovies');
        
const router = Router();



router.post('/auth/register', userRegister);

router.post('/auth/login', userLogin);

router.post('/addFavMovies', addFavMovie);


    











module.exports = router;