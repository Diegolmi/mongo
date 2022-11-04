const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/base_animales";

//conexioon a la base de datos

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log("DB is connected"))
  .catch((err) => console.error(err));

//definicion del esquema

const animalSchema = new mongoose.Schema({
    nombre: String,
    edad: Number,
    raza: String,
}, {versionKey: false});

//definicion del modelo

const AnimalModel = mongoose.model("animales", animalSchema);

//MostrarDatos

const mostrarDatos = async () => {
const animal = await AnimalModel.find();
console.log(animal);
};

//Creardatos 

const crearAnimal = async () => {
    const animal = new AnimalModel({
        nombre: "Firulais",
        edad: 18,
        raza: "caniche",
    });

    const animalNueva = await animal.save();
    console.log(animalNueva);
};

//ActualizarDatos

const actualizarAnimal = async (id) => {
    const animal = await AnimalModel.updateOne({_id: id}, {
        $set: {
            nombre: "Rocky",
            edad: 35,
           raza: "Labradora",
        }
    });
    console.log(animal);
};

//EliminarDatos

const eliminarAnimal = async (id) => {
const animal = await AnimalModel.deleteOne({_id: id});
console.log(animal);
};


//llamar a la funcion
// mostrarDatos(); 
 crearAnimal();
// actualizarPersona('636455d52fa714097b533288')
// eliminarPersona('636455d52fa714097b533288')






