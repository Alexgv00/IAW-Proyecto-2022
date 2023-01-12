import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

import restaurantsRoutes from "./routes/restaurantsRoutes.js";
import commentsRoutes from "./routes/commentsRoutes.js"
import dishesRoutes from "./routes/dishesRoutes.js";
import usersRoutes from "./routes/usersRoutes.js";
// import mongoURL from "./config/keys.js";
// import categoriasRoutes from "./routes/categoriasRoutes.js"
// import estudiantesRoutes from "./routes/estudiantesRoutes.js"

// Conexión BD
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/foodfinder');

const app = express();
app.use(express.json());

// Habilitar bodyparser (de esta manera podemos leer "form-data" como "x-www-form-ulrencoded")
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Habilitar cors
app.use(cors());

// Rutas
app.use("/api", restaurantsRoutes);
app.use("/api", commentsRoutes);
app.use("/api", dishesRoutes);
app.use("/api", usersRoutes);
// app.use("/api", categoriasRoutes);
// app.use("/api", estudiantesRoutes)

// Puerto
app.listen(8800, () => {
  console.log("Connected!");
});