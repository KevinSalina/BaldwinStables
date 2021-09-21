const express = require("express");
const path = require('path')
const app = express()
const port = process.env.PORT || 8080

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))

app.get('/', (req, res) => {
    res.render('pages/index')
})

app.get('/about', (req, res) => {
    res.render('pages/about')
})

app.get('/boarding', (req, res) => {
    res.render('pages/boarding')
})

app.get('/events', (req, res) => {
    res.render('pages/events')
})

app.get('/lesson-programs', (req, res) => {
    res.render('pages/lesson-programs')
})

app.get('/training', (req, res) => {
    res.render('pages/training')
})

app.get('*', (req, res) => {
    res.render('pages/error')
})

// Set up Server
app.listen(port, () => {
    console.log(`Bladwin Stables listening on port ${port}`)
})
