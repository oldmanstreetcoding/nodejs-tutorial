const {tulisPertanyaan, simpanContact} = require('./contacts');

const main = async () => {
    const nama = await tulisPertanyaan('Masukkan Pertanyaan Anda: ');
    const email = await tulisPertanyaan('Masukkan email Anda: ');
    const noHp = await tulisPertanyaan('Masukkan noHP Anda: ');

    simpanContact(nama, email, noHp);
}

main();




