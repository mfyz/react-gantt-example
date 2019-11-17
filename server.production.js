// require('dotenv').config()

const express = require('express')
const path = require('path')
const app = require('./server.base')

const { PORT } = process.env

app.use(express.static(path.join(__dirname, 'dist')))

// add NEXT.JS for ser-ver rendered react components...

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

app.listen(PORT, () => console.log(`App (prod) listening on port http://localhost:${PORT}`))
