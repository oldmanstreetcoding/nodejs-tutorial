const cetakNama = (nama) => `Halo nama saya ${nama}`

const PI = 3.14

const mahasiswa = {
    nama: 'agan',
    umur: 20,
    cetakMhs() {
        return `Halo nama saya ${nama}`
    }
}

class Orang {
   constructor(){
       console.log('inisiasi object');
   }
}

module.exports = {
    cetakNama, PI, mahasiswa, Orang
};