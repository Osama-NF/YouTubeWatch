import data from "../../scripts/data";
import ListItems from "../../Components/ListItems";
import { pullData } from "../../scripts/db";

export default function WatchLater() {


    return (
        <ListItems data={ async () => {
            await pullData('SELECT * FROM Videos WHERE last = 0')
        }}/>
    )
}