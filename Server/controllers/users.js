const { response, request } = require('express');



const Usuario = require('../models/users');



const usuariosGet = async(req = request, res = response) => {

   
}

const userRegister = async(req, res = response) => {
    try {
        let favMovies = {movies:[]};
        const { userName, email, password } = req.body;
        const usuario = new Usuario({ userName, email, password, favMovies });


        const user = await Usuario.findOne({
            userName: userName,
        });
        if (user) {
            return res.json({ ok: false, msg: "the userName is alredy in use"});
        }

        await usuario.save();
        res.json({ ok: true , usuario})
    } catch (err) {
        res.json({ ok: false, msg: "the email is alredy in use" })
    }    
}

const userLogin = async(req, res = response) => {
    
    const { userName, password } = req.body;
    
    const user = await Usuario.findOne({
        userName: userName,
        password: password 
    });
    
    if ( user ) {
        return res.json({ ok: true, user });
    } else {
        return res.json({ ok: false });
    }  
    
}

const usuariosPut = async(req, res = response) => {

    const { id } = req.params;
    const { _id, userName, email, password, ...rest } = req.body;

   

    const usuario = await Usuario.findByIdAndUpdate( id, rest );

    
}






module.exports = {
    usuariosGet,
    userRegister,
    userLogin,
    usuariosPut,
    
}