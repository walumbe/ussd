const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');

const app = express()

// Models
const user = require('./models/user')


// mongodb connect
mongoose.connect('mongodb://localhost/ussd', {
    useNewUrlParser:true
})

const db = mongoose.connection
mongoose.set('strictQuery', true);
db.on('error', (err) => console.log(err))
db.once('open', () => { console.log('Database is running')})

// body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false})) 

app.get('/', () => {
    res.send('Success Message')
    
})

app.post('/', () => {
    const {phoneNumber, text, sessionId } = req.body
    let response

    if(text === ''){
        response = 'CON Enter your first name'
    } else if(text !== ''){

    }

    setTimeout(() => {
        res.send(response)
        res.emd()
    },2000)
})



const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})