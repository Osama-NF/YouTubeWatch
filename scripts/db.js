import * as SQLite from 'expo-sqlite';
import * as React from 'react';

const db = SQLite.openDatabase('YTitems.db');


export function addToDB(items) {

    React.useEffect(() => {
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
    }, [])

    items.forEach(item => {
        if (!checkIfItemExists(item.id)) {
            db.transaction(tx => {
                tx.executeSql(`
                INSERT INTO 
                Videos (YTID, title, thumbnail)
                VALUES (?, ?, ?)
                `, 
                [item.ytid,
                item.title,
                item.thumbnail])
            })
        } 
    })
}

async function checkIfItemExists(id) {
    db.transaction(tx => {
        tx.executeSql(`SELECT * FROM Videos WHERE YTID = ?`, [id], rows => {
            console.warn(rows)
        })
    })
}