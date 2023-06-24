import data from "../../scripts/data";
import ListItems from "../../Components/ListItems";
import { pullData } from "../../scripts/db";
import * as React from 'react';

export default function WatchLater() {

    const [unwatched, setUnwatched] = React.useState()

    async function trythis () {
        setUnwatched(await pullData('SELECT * FROM Videos WHERE last = 0'))
    }
    trythis()
    
    console.log('after try this: ' + unwatched)
    
    React.useEffect( () => {
        console.log('use effect fired: ' + unwatched)
    }, [unwatched])


    return (
        <ListItems data={unwatched}/>
    )
}