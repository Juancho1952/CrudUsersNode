const express = require('express')

const usersRouter = require('./crud/users.router')

const port = 3500
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({message: 'OK'})
})

app.use('/API/V1', usersRouter)

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
})