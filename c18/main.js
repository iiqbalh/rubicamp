import sqlite3 from 'sqlite3'
import path from 'path'

const dbpath = path.join(path.resolve(), 'db', 'university.db')

export const db = new sqlite3.Database(dbpath);

db.all("SELECT * FROM mahasiswa ", (err, data) => {
    if (err) return console.log(data)
    console.log(data)
})