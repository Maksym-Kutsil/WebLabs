const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const cardRoutes = require('./routes/cards')

const app = express()
const PORT = process.env.PORT || 8080

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/cards', cardRoutes)

app.get('/', (req, res) => {
    res.send("API is running")
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
