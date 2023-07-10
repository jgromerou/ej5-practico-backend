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
