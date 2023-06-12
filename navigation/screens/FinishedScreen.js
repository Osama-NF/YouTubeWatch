import data from "../../scripts/data";
import ListItems from "../../Components/ListItems";

export default function Finished() {

    const filterData = (rawData) => {
        return rawData.filter((item) => item.last == item.fullLength)
    }

    return (
        <ListItems data={filterData(data)}/>
    )
}