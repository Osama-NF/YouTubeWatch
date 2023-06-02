import styles from "../Styles/styles";
import {
    FlatList,
    Text,
    View
} from "react-native";

export default function ListItems({data}) {

    
    
    const renderItem = ({item}) => {
        return (
            <View style={styles.row}>
                <Text>{item.video}</Text>
            </View>
        )
    }
    
    return (
        <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        />
    )
}