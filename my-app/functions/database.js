const mongoose = require ('mongoose')
const URI = 'mongodb+srv://arieldoraen:arieldoraen@cluster01-o1fjy.mongodb.net/Mytinerary?retryWrites=true&w=majority'
mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const conexion = mongoose.connection
conexion.once('open', () => console.log('conectado a la bd'))