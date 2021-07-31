
const express = require('express')
const app = express()
const port = 3000

// use ejs
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    // res.sendFile('./index.html', {root: __dirname})
    res.render('index', {nama: 'Ganapatih', title: 'Home'})
})

app.get('/produk/:id', (req, res) => {
        res.send('produk: '+req.params.id)
    })

app.get('/about', (req, res) => {
    res.sendFile('./about.html', {root: __dirname})
})

app.get('/contact', (req, res) => {
    res.sendFile('./contact.html', {root: __dirname})
})

app.use('/', (req, res) => {
    res.status(404);
    res.send('<h1>404</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})