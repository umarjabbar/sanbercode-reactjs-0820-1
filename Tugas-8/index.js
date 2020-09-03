// Soal 1
// di index.js
var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]

readBooks(8000, books[0], a => {
    readBooks(a, books[1], b => {
        readBooks(b, books[2], c => {
            readBooks(c, books[3], d => {
                console.log(`buku habis, tugas selesai.`)
            })
        })
    })
})
// Tulis code untuk memanggil function readBooks di sini