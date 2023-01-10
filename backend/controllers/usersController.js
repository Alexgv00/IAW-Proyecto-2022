// import Restaurants from '../models/Restaurants.js';
// import Dishes from '../models/Dishes.js';
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Users from "../models/Users.js";

// Muestra todos los restaurants
export const showUsers = async (req, res) => {
    try {
        // obtener todos los usuarios
        const documents = await Users.find({});
        res.json(documents);
    } catch (error) {
        console.log(error);
    }
};

export const searchUsers = async (req, res) => {
    try {
        // obtener el query de la URL
        const { query } = req.params;
        const documents = await Users.find({ name: new RegExp(query, 'i') })
        .populate({
            path: 'comment',
            model: 'Comments'
        })
        res.json(documents);
    } catch (error) {
        console.log(error);
    }
};

// Muestra un usaurio en especifico por su ID
export const showUsersById = async (req, res) => {
    const document = await Users.findById(req.params.idUsers);

    if(!document) {
        res.json({mensaje : 'Ese usuario no existe'});
    }
    // Mostrar el usuario
    res.json(document);
};


// Registra un nuevo usuario
export const register = async (req, res) => {
    bcrypt.hash(req.body.password, 10, function(err, hashedPass){
        if(err){
            res.json({
                error:err
            })
        }

        let user = new Users ({
            nickname: req.body.nickname,
            password: hashedPass,
            email:req.body.email,
            avatar: req.body.avatar,
            role: req.body.role
        });

        user.save()
        .then(user => {
            res.json({
                message: 'Usuario añadido correctamente:'+ user.nickname
            })
        })
        .catch(error =>{
            res.json({
                message: 'Ha ocurrido un error'
            })
        })
    })
};

export const login = async(req, res) => {
    //find the user based on email
    const {username, password} = req.body; 

      try{
           const user =  await Users.findOne({username});
           if(user==null) 
            return res.status(400).json({err : "User with username doesnot exists.Please signup"});
            if (bcrypt.compare(password, user.password, function(err, result){
                if (err) err.message
            }))
           return (user)
     }
      catch(error){
            return res.status(500).json({err : 
                                error.message});
          }
     const user =  await Users.findOne({username});
    //IF EVERYTHING GOES FINE, ASSIGN YOUR TOKEN make sure you have JWT installed 
    const token = jwt.sign({_id: user._id}, 'AzQ,PI)0(');

    const {_id, name} = user;
    res.cookie('foodFinder_user', {token, user : {_id, name}});
    res.send({token, user : {_id, name}});
}


// Actualiza un usuario via id
export const updateUser = async (req, res) => {
    try {
        console.log("Datos a modificar", req.body);

        const filter = { _id : req.body.id };
        const update =  req.body;
        //Opciones, devolver el nuevo objeto modificado
        const options = {new : true};

        const document = await Users.findOneAndUpdate(filter, update, options);
        res.json(document);
    } catch (error) {
        res.send(error);
    }
};

// Elimina un users via ID
export const deleteUser = async (req, res) => {
    try {
        await Users.findByIdAndDelete({ _id : req.params.idUsers });
        res.json({mensaje : 'El Users se ha eliminado'});
    } catch (error) {
        console.log(error);
    }
};
