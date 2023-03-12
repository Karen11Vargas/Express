const MiApiModels = require('./users.model')

const User = {
    //Listar los datos
   list: async (req, res) => {
        const users = await MiApiModels.Users.find()
        res.status(200).send(users)
    },

    //Insertar Registro
    create: async(req,res) =>{
        const user = new Users(req.body) //Todo lo que se recibe se crea un objeto
        const saveUser = await user.save() //Ese objeto se guada con el metodo save 
        res.status(201).send(saveUser)//Devuelve lo que envia el cliente
    },

    //Listar un registro
    get:async(req,res) =>{
        const{id}=req.params
        const user= await MiApiModels.Users.findOne({_id: id})
        res.status(200).send(user)
    },

    //Actualizar un registro
    update:async(req,res) =>{
        const{id}=req.params
        const user= await MiApiModels.Users.findOne({_id: id})
        Object.assign(user, req.body)
        await user.save()
        res.sendStatus(204)
    },

    //Eliminar un registro
    delete:async(req,res) =>{
        const{id}=req.params
        const user= await MiApiModels.Users.findOne({_id: id})

        if (user) {
            user.remove();
        }
        res.sendStatus(204)
    },
}

module.exports = User;