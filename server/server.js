const express = require('express')
const path = require('path')

const app = express()
const publicDirectory = path.join(__dirname, '..', 'public')
const port = process.env.PORT || 3000

app.use(express.static(publicDirectory))

app.get('*', (req, res) => {
    res.sendFile(path.join(publicDirectory, 'index.html'))
})

app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})