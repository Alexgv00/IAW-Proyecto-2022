// import Restaurants from '../models/Restaurants.js';
import Dishes from '../models/Dishes.js';
// import Dishes from '../models/Dishes.js';

// Muestra todos los restaurants
export const showDishes = async (req, res) => {
    try {
        // obtener todos los dishes
        const documents = await Dishes.find({});
        res.json(documents);
    } catch (error) {
        console.log(error);
    }
};

export const searchDishes = async (req, res) => {
    try {
        // obtener el query de la URL
        const { query } = req.params;
        const documents = await Restaurants.find({ name: new RegExp(query, 'i') })
        .populate()
        
        res.json(documents);
    } catch (error) {
        console.log(error);
    }
};

// export const searchCursosPorPrecio = async (req, res) => {
//     try {
//         // obtener el query de la URL
//         const {minPrecio, maxPrecio} = req.params; // req.params.minPrecio
//         const documents = await Cursos.find(  { $and:
//             [
//                 {precio: { $gte: minPrecio } },
//                 {precio: { $lte: maxPrecio }},
//             ]
//          })
//         .populate("restaurant");
//         res.json(documents);
//     } catch (error) {
//         console.log(error);
//     }
// };

// Muestra un plato en especifico por su ID
export const showDishById = async (req, res) => {
    const document = await Dishes.findById(req.params.idDishes);

    if(!document) {
        res.json({mensaje : 'Ese plato no existe'});
    }
    // Mostrar el plato
    res.json(document);
};


// Agrega un nuevo plato
export const newDish = async (req, res) => {
    const document = new Dishes(req.body);
    try {
        // almacenar el registro
        await document.save();
        res.json({ mensaje : 'Se agrego un nuevo plato' });
    } catch (error) {
        // si hay un error, console.log
        res.send(error);
    }
};

export const updateDish = async (req, res) => {
    try {
        console.log("Datos a modificar", req.body);

        const filter = { _id : req.body.id };
        const update =  req.body;
        //Opciones, devolver el nuevo objeto modificado
        const options = {new : true};

        const document = await Restaurants.findOneAndUpdate(filter, update, options);
        res.json(document);
    } catch (error) {
        res.send(error);
    }
};

// Elimina un dishes via ID
export const deleteDish = async (req, res) => {
    try {
        await Dishes.findByIdAndDelete({ _id : req.params.idDishes });
        res.json({mensaje : 'El plato se ha eliminado'});
    } catch (error) {
        console.log(error);
    }
};
