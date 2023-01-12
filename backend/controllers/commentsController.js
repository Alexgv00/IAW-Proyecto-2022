// import Restaurants from '../models/Restaurants.js';
import Comments from '../models/Comments.js';
// import Dishes from '../models/Dishes.js';

// Muestra todos los comentarios
export const showComments = async (req, res) => {
    try {
        // obtener todos los comentarios
        const documents = await Comments.find({}).populate("user");
        res.json(documents);
    } catch (error) {
        console.log(error);
    }
};

export const searchComments = async (req, res) => {
    try {
        // obtener el query de la URL
        const { query } = req.params;
        const documents = await Comments.find({ name: new RegExp(query, 'i') })
        .populate("user restaurant")
        
        res.json(documents);
    } catch (error) {
        console.log(error);
    }
};

// Muestra un comentario en especifico por su ID
export const showCommentById = async (req, res) => {
    const document = await Comments.findById(req.params.idComment).populate("user");

    if(!document) {
        res.json({mensaje : 'Ese comentario no existe'});
    }
    // Mostrar el curso
    res.json(document);
};


// Agrega un nuevo comentario
export const newComment = async (req, res) => {
    const document = new Comments(req.body);
    try {
        // almacenar el registro
        await document.save();
        res.json({ mensaje : 'Se agrego un nuevo comentario' });
    } catch (error) {
        // si hay un error, console.log
        res.send(error);
    }
};

// Actualiza un comentario via id
export const updateComment = async (req, res) => {
    try {
        console.log("Datos a modificar", req.body);

        const filter = { _id : req.body.id };
        const update =  req.body;
        //Opciones, devolver el nuevo objeto modificado
        const options = {new : true};

        const document = await Comments.findOneAndUpdate(filter, update, options);
        /*const curso = await Cursos.findAndModify({
            query:filter,
            update:{nombre:update.nombre, descripcion:update.descripcion},
            new:true
        });*/
        res.json(document);
    } catch (error) {
        res.send(error);
    }
};

// Elimina un comentario via ID
export const deleteComment = async (req, res) => {
    try {
        await Comments.findByIdAndDelete({ _id : req.params.idComment });
        res.json({mensaje : 'El comentario se ha eliminado'});
    } catch (error) {
        console.log(error);
    }
};