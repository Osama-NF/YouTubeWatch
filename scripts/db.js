import * as SQLite from 'expo-sqlite';
import * as React from 'react';

const db = SQLite.openDatabase('YTitems.db');

React.useEffect(() => {
    db.transaction(tx => {
        tx.executeSql(`
            CREATE TABLE IF NOT EXISTS Videos(
                YTID VARCHAR(255) PRIMARY KEY,
                title TEXT,
                thumbnail TEXT,
                full_length INTEGER,
                last INTEGER
            )
        `)
    })
}, [])