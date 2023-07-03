import ListItems from "../../Components/ListItems";
import { pullData } from "../../scripts/db";
import * as React from 'react';
import * as SQLite from 'expo-sqlite'

export default function WatchLater() {

    const [unwatched, setUnwatched] = React.useState(0)

    // async function trythis () {
    //     new Promise( async (resolve, reject) =>  {
    //         setUnwatched(await pullData('SELECT * FROM Videos WHERE last = 0'))
    //     }).then(r)
    // }
    // trythis()
    
    // console.log('after try this: ' + unwatched)


    const db = SQLite.openDatabase('YTitems.db');
    db.transaction(tx => {

        tx.executeSql('SELECT * FROM Videos WHERE last = 0',[], (_, result) => {

            setUnwatched(result.rows._array)

        })

    })

    return (
        <ListItems data={unwatched}/>
    )
}