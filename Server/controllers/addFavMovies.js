const { response, request } = require('express');

const Usuario = require('../models/users');

const addFavMovie = async(req = request, res = response) => {
    const { userName, favMovies } = req.body;
    try {
        
        
        const filter = { userName: userName };
        const update = {favMovies: favMovies};

        const user = await Usuario.findOneAndUpdate(filter, update);
        
        await user.save();
        //const user = await Usuario.findOneAndUpdate(filter, update);
            
        


        
        res.json({ ok: true , user});
    } catch (err) {
        res.json({ ok: false});
    }    
}


module.exports = {
    addFavMovie
    
}