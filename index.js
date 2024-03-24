const express = require('express')
const cors = require('cors')
const colors = require('colors')
require('./db/connection')

const app = express()

app.use(express.json())
app.use(cors({
    origin: "*"
}))

app.use('/apiv1/', require('./routes/ProductRoutes'))
app.use('/apiv1/', require('./routes/userRoutes'))

app.get('/', (req, res) => {
    return res.json({message: 'Server live'})
})

const port = 8000
app.listen(port, (err) => {
    if(err){
        return console.log('server error', err)
    }
    return console.log(`Server is running on http://localhost:${port}`.bgBlue)
})