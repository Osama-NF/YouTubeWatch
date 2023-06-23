import * as SQLite from 'expo-sqlite';
import * as React from 'react';
import { getPlayListData } from './data';

const db = SQLite.openDatabase('YTitems.db');


export async function addToDB() {

    db.transaction(tx => {
        tx.executeSql(`
            CREATE TABLE IF NOT EXISTS Videos(
                YTID VARCHAR(255) PRIMARY KEY,
                title TEXT,
                thumbnail TEXT,
                full_length INTEGER DEFAULT 0,
                last INTEGER DEFAULT 0
            )
        `)
    })

    items = await getPlayListData()
    items.forEach(item => insertIntoDB(item))
}

// Will probably delete this one
async function checkIfItemExists(id) {
    db.transaction(tx => {
        tx.executeSql(`SELECT * FROM Videos WHERE YTID = ?`, [id], (_,result) => {
            return result.rows.length
        })
    })
}

async function insertIntoDB(item) {
        db.transaction(tx => {
            tx.executeSql(`
            INSERT OR IGNORE INTO 
            Videos (YTID, title, thumbnail)
            VALUES (?, ?, ?)
            `, 
            [item.ytid,
            item.title,
            item.thumbnail]
            )
        }, (err) => {
            console.error(err)
        })
    
}


export async function pullData(query) {
    let data;
    db.transaction(tx => {
        tx.executeSql(query,[], (_, result) => {
            console.log(result.rows._array)
            data = result.rows._array
        })
    })
    return data
}