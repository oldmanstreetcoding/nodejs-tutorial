
const express = require('express')
const expressLayouts = require('express-ejs-layouts');
const app = express()
const port = 3000

// use ejs
app.set('view engine', 'ejs');
app.use(expressLayouts);

app.use(express.static('public'));

// applicatin level middlewares
app.use((req, res, next) => {
    console.log(`Time: ${Date.now()}`);
    next();
})

app.get('/', (req, res) => {
    res.render('index', {
        nama: 'Ganapatih', 
        layout: 'layouts/main-layout',
        title: 'Home Pages'})
})

app.get('/about', (req, res) => {
    res.render('about', {
        layout: 'layouts/main-layout',
        title: 'About Pages'})
})

app.get('/contact', (req, res) => {
    res.render('contact', {
        layout: 'layouts/main-layout',
        title: 'Contact Pages'})
})

app.get('/produk/:id', (req, res) => {
    res.send('produk: '+req.params.id)
})

app.use('/', (req, res) => {
    res.status(404);
    res.send('<h1>404</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
