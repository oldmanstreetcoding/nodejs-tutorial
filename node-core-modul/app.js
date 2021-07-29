const fs = require('fs')

// menuliskan string ke file secara synchronus
// try {
//     fs.writeFileSync('text.txt', 'hello world secara synchronus')
// }catch(e){
//     console.log(e);
// }

// menuliskan string ke file secara asynchronous
// fs.writeFile('text.txt', 'Hello World Asynchronus', (e)=> {
//     console.log(e);
// })

// membaca isi file secara synchronus
// const text = fs.readFileSync('text.txt', 'utf8');
// console.log(text);

// membaca isi file secara Asynchronus
// fs.readFile('text.txt', 'utf8', (e, r) => {
//     if (e) throw e;
//     console.log(r);
// })

const readline = require('readline')

const rl = readline.Interface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Masukkan Nama Anda: ', (nama) => {

    rl.question('Berapa usia Anda: ', (usia) => {

        const contact = {nama,usia};
        const file = fs.readFileSync('contact.json', 'utf8');
        const contacts = JSON.parse(file);

        contacts.push(contact);

        fs.writeFileSync('contact.json', JSON.stringify(contacts));
        
        rl.close();
    })

})


