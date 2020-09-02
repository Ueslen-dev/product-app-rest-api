const mongoose = require('mongoose')


const dbUser = ""
const dbPass = ""
const db = ""


const mongoURI = `mongodb+srv://${dbUser}:${dbPass}@cluster0.fbwc9.gcp.mongodb.net/${db}?retryWrites=true&w=majority`

const connectDB = async () => {
    await mongoose.connect(
        mongoURI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        }
    )
    console.log('conectou')
  
    mongoose.connection.on('error',function (err) {  
        console.log('Erro na conexão Mongoose padrão ...: ' + err);
    })
}


module.exports = connectDB