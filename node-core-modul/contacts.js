const fs = require('fs')

const readline = require('readline')

const rl = readline.Interface({
    input: process.stdin,
    output: process.stdout
})

const dirPath = './data';
if(!fs.existsSync(dirPath)){
    fs.mkdirSync(dirPath)
}

const filePath = './data/contact.json';
if(!fs.existsSync(filePath)){
    fs.writeFileSync(filePath, '[]', 'utf8');
}

const tulisPertanyaan = (pertanyaan) => {
    return new Promise((resolve, reject) => {
        rl.question(pertanyaan, (text) => {
            resolve(text);
        });
    })
}

const simpanContact = (nama, email, noHp) => {
    const contact = {nama, email, noHp};
    const file = fs.readFileSync(filePath, 'utf8');
    const contacts = JSON.parse(file);

    contacts.push(contact);

    fs.writeFileSync(filePath, JSON.stringify(contacts));
    
    rl.close();
}

module.exports = {
    tulisPertanyaan,
    simpanContact,
}