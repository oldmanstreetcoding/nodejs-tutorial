
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.sendFile('./index.html', {root: __dirname})
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

// const { fstat } = require('fs');
// const http = require('http');
// const fs = require('fs');
// const port = 3000;

// const renderHtml = (path, res) => {
//     fs.readFile(path, (err, data) => {
//         if(err) {
//             res.writeHead(404);
//             res.write('Error: File not Found');
//         }else{
//             res.write(data);
//         }
//         res.end();
//     })
// }

// http
//     .createServer((req, res) => {
//         res.writeHead(200, {
//             'Content-Type': 'text/html'
//         })

//         const url = req.url;
//         if(url === '/about'){
//             renderHtml('about.html', res)
//         } else if(url === '/contact'){
//             renderHtml('contact.html', res)
//         }else{
//             renderHtml('index.html', res)
//         }
//     })
//     .listen(port, () => {
//         console.log(`server listening on port ${port}`);
//     });