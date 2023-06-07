import {
    FlatList,
    Text,
    View
} from "react-native";
import data from "../../scripts/data";
import ListItems from "../../Components/ListItems";

export default function Watching() {

    const filterData = (rawData) => {
        return rawData.filter((item) => item.last != 0)
    }
    
    return (
        <ListItems data={filterData(data)}/>
    )
}