import Categories from '../models/Categories.js';

// Muestra todos los categories
export const showCategories = async (req, res) => {
    try {
        // obtener todos los categories
        const documents = await Categories.find({});
        res.json(documents);
    } catch (error) {
        console.log(error);
    }
};

export const searchCategories = async (req, res) => {
    try {
        // obtener el query de la URL
        const { query } = req.params;
        const documents = await Categories.find({ name: new RegExp(query, 'i') })
        
        res.json(documents);
    } catch (error) {
        console.log(error);
    }
};

// export const searchCategoriesByPrice = async (req, res) => {
//     try {
//         // obtener el query de la URL
//         const {minPrice, maxPrice} = req.params; // req.params.minPrecio
//         const documents = await Categories.find(  { $and:
//             [
//                 {precio: { $gte: minPrice } },
//                 {precio: { $lte: maxPrice }},
//             ]
//          })
//         .populate("categoria");
//         res.json(documents);
//     } catch (error) {
//         console.log(error);
//     }
// };

// Muestra una categoria en especifico por su ID
export const showCategoryById = async (req, res) => {
    const document = await Categories.findById(req.params.idCategory);

    if(!document) {
        res.json({mensaje : 'Ese categoria no existe'});
    }
    // Mostrar el categoria
    res.json(document);
};


// Agrega un nuevo categoria
export const newCategory = async (req, res) => {
    const document = new Categories(req.body);
    try {
        // almacenar el registro
        await document.save();
        res.json({ mensaje : 'Se agrego un nuevo categoria' });
    } catch (error) {
        // si hay un error, console.log
        res.send(error);
    }
};

// Actualiza un curso via id
export const updateCategory = async (req, res) => {
    try {
        console.log("Datos a modificar", req.body);

        const filter = { _id : req.body.id };
        const update =  req.body;
        //Opciones, devolver el nuevo objeto modificado
        const options = {new : true};

        const document = await Categories.findOneAndUpdate(filter, update, options);
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

// Elimina un categoria via ID
export const deleteCategory = async (req, res) => {
    try {
        await Categories.findByIdAndDelete({ _id : req.params.idCategory });
        res.json({mensaje : 'El categoria se ha eliminado'});
    } catch (error) {
        console.log(error);
    }
};