import sqlite3 from 'sqlite3'
import path from 'path'
import redline from 'node:readline'


export const db = new sqlite3.Database(path.join(path.resolve(), 'db', 'university.db'))
export const rl = redline.createInterface({
    input: process.stdin,
    output: process.stdout
});