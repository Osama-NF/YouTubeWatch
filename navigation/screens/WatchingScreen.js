import data from "../../scripts/data";
import ListItems from "../../Components/ListItems";

export default function Watching() {

    const filterData = (rawData) => {
        return rawData.filter((item) => item.last != 0 && item.last != item.fullLength)
    }
    
    return (
        <ListItems data={filterData(data)}/>
    )
}