const mongoose = require('mongoose')

const Users = mongoose.model('User', {
  name: { type: String, required: true },
  lastname: { type: String, required: true }
})


const mySchema = mongoose.model('myschemas', {
  name: { type: String, required: true },
  lastname: { type: String, required: true },
});

module.exports = {
  Users: Users,
  mySchema: mySchema
}