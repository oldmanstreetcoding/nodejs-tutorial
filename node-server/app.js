const { fstat } = require('fs');
const http = require('http');
const fs = require('fs');
const port = 3000;

const renderHtml = (path, res) => {
    fs.readFile(path, (err, data) => {
        if(err) {
            res.writeHead(404);
            res.write('Error: File not Found');
        }else{
            res.write(data);
        }
        res.end();
    })
}

http
    .createServer((req, res) => {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        })

        const url = req.url;
        if(url === '/about'){
            renderHtml('about.html', res)
        } else if(url === '/contact'){
            renderHtml('contact.html', res)
        }else{
            renderHtml('index.html', res)
        }
    })
    .listen(port, () => {
        console.log(`server listening on port ${port}`);
    });