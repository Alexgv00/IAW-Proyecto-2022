import Restaurants from '../models/Restaurants.js';
import Comments from '../models/Comments.js';
// import Dishes from '../models/Dishes.js';

// Muestra todos los restaurants
export const showRestaurants = async (req, res) => {
    try {
        // obtener todos los restaurants
        const documents = await Restaurants.find({}).populate("dishes").populate("category").populate("comments");
        res.json(documents);
    } catch (error) {
        console.log(error);
    }
};

export const searchRestaurants = async (req, res) => {
    try {
        // obtener el query de la URL
        const { query } = req.params;
        const documents = await Restaurants.find({ name: new RegExp(query, 'i') })
        .populate('comments')
        .populate('dishes')
        .populate('category')
        
        res.json(documents);
    } catch (error) {
        console.log(error);
    }
};

export const searchRestaurantsByPrice = async (req, res) => {
    try {
        // obtener el query de la URL
        const {minPrice, maxPrice} = req.params; // req.params.minPrecio
        const documents = await Restaurants.find(  { $and:
            [
                {precio: { $gte: minPrice } },
                {precio: { $lte: maxPrice }},
            ]
         })
        .populate("category");
        res.json(documents);
    } catch (error) {
        console.log(error);
    }
};

// Muestra un restaurants en especifico por su ID
export const showRestaurantsById = async (req, res) => {
    const document = await Restaurants.findById(req.params.idRestaurant);

    if(!document) {
        res.json({mensaje : 'Ese restaurante no existe'});
    }
    // Mostrar el restaurante
    res.json(document);
};


// Agrega un nuevo restaurante
export const newRestaurant = async (req, res) => {
    const document = new Restaurants(req.body);
    try {
        // almacenar el registro
        await document.save();
        res.json({ mensaje : 'Se agrego un nuevo restaurante' });
    } catch (error) {
        // si hay un error, console.log
        res.send(error);
    }
};

// Actualiza un curso via id
export const updateRestaurant = async (req, res) => {
    try {
        console.log("Datos a modificar", req.body);

        const filter = { _id : req.body.id };
        const update =  req.body;
        //Opciones, devolver el nuevo objeto modificado
        const options = {new : true};

        const document = await Restaurants.findOneAndUpdate(filter, update, options);
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

// Elimina un restaurante via ID
export const deleteRestaurant = async (req, res) => {
    try {
        await Restaurants.findByIdAndDelete({ _id : req.params.idRestaurant });
        res.json({mensaje : 'El restaurante se ha eliminado'});
    } catch (error) {
        console.log(error);
    }
};
