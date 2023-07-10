import Receta from '../models/receta';

export const controladorTest = (req, res) => {
  res.send('Este es un test de mi ruta GET de raíz');
};

export const crearReceta = async (req, res) => {
  try {
    const { nombreReceta } = req.body;

    //verificar si la receta ya existe
    let receta = await Receta.findOne({
      nombreReceta,
    }); //devuelve un null
    console.log(receta);
    if (receta) {
      //si la receta existe
      return res.status(400).json({
        mensaje: 'ya existe el nombre de la receta',
      });
    }
    const recetaNueva = new Receta(req.body);
    await recetaNueva.save();
    res.status(201).json({
      mensaje: 'La Receta fue creada correctamente.',
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: 'Error no se pudo crear una receta',
    });
  }
};

export const obtenerListaRecetas = async (req, res) => {
  try {
    //buscar en la BD la collection de Recetas
    const recetas = await Receta.find();
    res.status(200).json(recetas);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: 'Error al intentar listar las recetas',
    });
  }
};

export const obtenerReceta = async (req, res) => {
  try {
    //buscar en la BD un documento receta mediante el id
    const receta = await Receta.findById(req.params.id);
    res.status(200).json(receta);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: 'Error al intentar obtener la receta',
    });
  }
};
