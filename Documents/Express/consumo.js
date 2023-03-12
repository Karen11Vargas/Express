const axios = require('axios');
const MiApiModels = require('./src/users.model');

async function getUsers(req, res) {
  try {
    const response = await axios.get('http://localhost:3000/app');
    console.log(response)
    let usuarios = [];
    if (Array.isArray(response.data)) {
      usuarios = response.data.map(usuario => ({
        name: usuario.name,
        lastname: usuario.lastname,
      }));
    } else {
      usuarios = [{
        name: response.data.name,
        lastname: response.data.lastname,
      }];
    }
    await MiApiModels.mySchema.insertMany(usuarios);
  res.status(200).json({ message: 'La API ha sido consumida y los datos han sido guardados en la base de datos.' });

  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving users');
  }
}

module.exports ={getUsers};
