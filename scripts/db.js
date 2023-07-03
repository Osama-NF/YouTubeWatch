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

// export async function pullData(query, updateState) {


//     db.transaction(tx => {

//         console.error('inside transaction')
//         tx.executeSql(query,[], (_, result) => {
//             console.warn(result.rows._array)

//             updateState(result.rows._array)

//         },(_,err) => console.log("error: " , err))
//     })
// }